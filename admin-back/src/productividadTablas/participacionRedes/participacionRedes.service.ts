import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParticipacionRedes } from './participacionRedes.entity';

@Injectable()
export class ParticipacionRedesService {
  constructor(
    @InjectRepository(ParticipacionRedes)
    private participacionRedesRepository: Repository<ParticipacionRedes>,
  ) { }

  findAll(): Promise<ParticipacionRedes[]> {
    return this.participacionRedesRepository.find();
  }

  create(data: Partial<ParticipacionRedes>): Promise<ParticipacionRedes> {
    const nuevoRegistro = this.participacionRedesRepository.create(data);
    return this.participacionRedesRepository.save(nuevoRegistro);
  }

  async update(
    id: number,
    data: Partial<ParticipacionRedes>
  ): Promise<ParticipacionRedes> {
    await this.participacionRedesRepository.update({ id_participacion: id }, data);

    const registroActualizado = await this.participacionRedesRepository.findOne({
      where: { id_participacion: id } as any, 
    });

    if (!registroActualizado) {
      throw new Error('Registro no encontrado');
    }

    return registroActualizado;
  }

  async delete(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.participacionRedesRepository.delete({ id_participacion: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
