import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignaturasOptativas } from './asignaturasOptativas.entity';

@Injectable()
export class AsignaturasOptativasService {
  constructor(
    @InjectRepository(AsignaturasOptativas)
    private readonly asignaturasRepo: Repository<AsignaturasOptativas>,
  ) { }

  async findAll(): Promise<AsignaturasOptativas[]> {
    return this.asignaturasRepo.find();
  }

  async create(asignaturaData: Partial<AsignaturasOptativas>): Promise<AsignaturasOptativas> {
    const nuevaAsignatura = this.asignaturasRepo.create(asignaturaData);
    return this.asignaturasRepo.save(nuevaAsignatura);
  }

  async update(id: number, asignaturaData: Partial<AsignaturasOptativas>): Promise<AsignaturasOptativas> {
    const asignaturaExistente = await this.asignaturasRepo.findOne({ where: { id_optativas: id } });

    if (!asignaturaExistente) {
      throw new HttpException('Asignatura no encontrada', HttpStatus.NOT_FOUND);
    }

    const asignaturaActualizada = this.asignaturasRepo.merge(asignaturaExistente, asignaturaData);
    return this.asignaturasRepo.save(asignaturaActualizada);
  }

  async delete(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.asignaturasRepo.delete(id);

    if (resultado.affected === 0) {
      throw new HttpException('Asignatura no encontrada', HttpStatus.NOT_FOUND);
    }

    return { deleted: true };
  }
}
