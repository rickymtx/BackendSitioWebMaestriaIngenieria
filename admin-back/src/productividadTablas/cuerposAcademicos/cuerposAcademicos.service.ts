import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuerpoAcademico } from './cuerposAcademicos.entity';
import { IntegranteCuerpo } from './integrantesCuerpo.entity';

@Injectable()
export class CuerposAcademicosService {
  constructor(
    @InjectRepository(CuerpoAcademico)
    private cuerposRepo: Repository<CuerpoAcademico>,
    @InjectRepository(IntegranteCuerpo)
    private integrantesRepo: Repository<IntegranteCuerpo>,
  ) { }

  findAll(): Promise<CuerpoAcademico[]> {
    return this.cuerposRepo.find({ relations: ['integrantes'] });
  }

  async create(data: {
    nomProy: string;
    integrantes?: { nombre: string }[];
  }): Promise<CuerpoAcademico> {
    const cuerpo = this.cuerposRepo.create({ nomProy: data.nomProy });
    const savedCuerpo = await this.cuerposRepo.save(cuerpo);

    if (data.integrantes && data.integrantes.length > 0) {
      const integrantes = data.integrantes.map((i) =>
        this.integrantesRepo.create({
          nombre: i.nombre,
          id_cuerpo: savedCuerpo.id_cuerpo,
          cuerpo: savedCuerpo,
        }),
      );
      await this.integrantesRepo.save(integrantes);
      savedCuerpo.integrantes = integrantes;
    }

    return savedCuerpo;
  }

  async update(
    id: number,
    data: { nomProy?: string; integrantes?: { nombre: string }[] },
  ): Promise<CuerpoAcademico> {
    const cuerpo = await this.cuerposRepo.findOne({ where: { id_cuerpo: id }, relations: ['integrantes'] });
    if (!cuerpo) throw new Error('Cuerpo académico no encontrado');

    if (data.nomProy) cuerpo.nomProy = data.nomProy;

    await this.cuerposRepo.save(cuerpo);

    if (data.integrantes) {
      if (cuerpo.integrantes.length > 0) {
        await this.integrantesRepo.remove(cuerpo.integrantes);
      }

      const nuevosIntegrantes = data.integrantes.map((i) =>
        this.integrantesRepo.create({ nombre: i.nombre, id_cuerpo: cuerpo.id_cuerpo, cuerpo }),
      );
      await this.integrantesRepo.save(nuevosIntegrantes);
      cuerpo.integrantes = nuevosIntegrantes;
    }

    return cuerpo;
  }

  async delete(id: number): Promise<{ message: string }> {
    const cuerpo = await this.cuerposRepo.findOne({ where: { id_cuerpo: id }, relations: ['integrantes'] });
    if (!cuerpo) throw new Error('Cuerpo académico no encontrado');

    if (cuerpo.integrantes.length > 0) {
      await this.integrantesRepo.remove(cuerpo.integrantes);
    }

    await this.cuerposRepo.remove(cuerpo);

    return { message: 'Cuerpo académico eliminado correctamente' };
  }
}
