import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DistribucionAsignaturas } from './distribucionAsignaturas.entity';

@Injectable()
export class DistribucionAsignaturasService {
  constructor(
    @InjectRepository(DistribucionAsignaturas)
    private readonly distribucionAsignaturasRepository: Repository<DistribucionAsignaturas>,
  ) { }

  async findAll(): Promise<DistribucionAsignaturas[]> {
    return this.distribucionAsignaturasRepository.find();
  }

  async create(
    distribucionAsignaturasData: Partial<DistribucionAsignaturas>,
  ): Promise<DistribucionAsignaturas> {
    const nuevaAsignatura = this.distribucionAsignaturasRepository.create(distribucionAsignaturasData);
    return this.distribucionAsignaturasRepository.save(nuevaAsignatura);
  }

  async update(
    id: number,
    distribucionAsignaturasData: Partial<DistribucionAsignaturas>,
  ): Promise<DistribucionAsignaturas | null> {
    const asignatura = await this.distribucionAsignaturasRepository.findOneBy({ id_asignatura: id });
    if (!asignatura) {
      return null;
    }
    Object.assign(asignatura, distribucionAsignaturasData);
    return this.distribucionAsignaturasRepository.save(asignatura);
  }

  async delete(id: number): Promise<boolean> {
    const resultado = await this.distribucionAsignaturasRepository.delete(id);
    return (resultado.affected ?? 0) > 0;
  }
}
