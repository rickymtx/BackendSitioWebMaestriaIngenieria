import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrientacionProfesional } from './orientacionProfesional.entity';

@Injectable()
export class OrientacionProfesionalService {
  constructor(
    @InjectRepository(OrientacionProfesional)
    private readonly orientacionProfesionalRepository: Repository<OrientacionProfesional>,
  ) {}

  async findAll(): Promise<OrientacionProfesional[]> {
    return this.orientacionProfesionalRepository.find();
  }

  async create(data: Partial<OrientacionProfesional>): Promise<OrientacionProfesional> {
    const nuevaMateria = this.orientacionProfesionalRepository.create(data);
    return this.orientacionProfesionalRepository.save(nuevaMateria);
  }

  async update(id: number, data: Partial<OrientacionProfesional>): Promise<OrientacionProfesional> {
    const materia = await this.orientacionProfesionalRepository.findOne({ where: { id_orientacion: id } });

    if (!materia) {
      throw new NotFoundException('Materia no encontrada');
    }

    Object.assign(materia, data);
    return this.orientacionProfesionalRepository.save(materia);
  }

  async delete(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.orientacionProfesionalRepository.delete(id);

    if (resultado.affected === 0) {
      throw new NotFoundException('Materia no encontrada');
    }

    return { deleted: true };
  }
}
