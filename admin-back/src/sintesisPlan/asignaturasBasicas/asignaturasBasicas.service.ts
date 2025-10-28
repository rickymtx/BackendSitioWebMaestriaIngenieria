import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignaturasBasicas } from './asignaturasBasicas.entity';

@Injectable()
export class AsignaturasBasicasService {
  constructor(
    @InjectRepository(AsignaturasBasicas)
    private readonly asignaturasRepo: Repository<AsignaturasBasicas>,
  ) { }

  async findAll(): Promise<AsignaturasBasicas[]> {
    return this.asignaturasRepo.find();
  }

  async create(data: { materia: string; creditos: number }): Promise<AsignaturasBasicas> {
    const nuevaAsignatura = this.asignaturasRepo.create(data);
    return await this.asignaturasRepo.save(nuevaAsignatura);
  }

  async update(
    id: number,
    data: { materia?: string; creditos?: number },
  ): Promise<boolean> {
    const resultado = await this.asignaturasRepo.update(id, data);
    return (resultado.affected ?? 0) > 0;
  }

  async remove(id: number): Promise<boolean> {
    const resultado = await this.asignaturasRepo.delete(id);
    return (resultado.affected ?? 0) > 0;
  }
}
