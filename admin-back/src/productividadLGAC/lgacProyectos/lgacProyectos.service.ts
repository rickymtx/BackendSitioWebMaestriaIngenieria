import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacProyectos } from './lgacProyectos.entity';

@Injectable()
export class LgacProyectosService {
  constructor(
    @InjectRepository(LgacProyectos)
    private readonly lgacProyectosRepository: Repository<LgacProyectos>,
  ) {}

  findAll(): Promise<LgacProyectos[]> {
    return this.lgacProyectosRepository.find();
  }

  findOne(id: number): Promise<LgacProyectos | null> {
    return this.lgacProyectosRepository.findOneBy({ id_proyecto: id });
  }

  async create(nuevoProyecto: LgacProyectos): Promise<LgacProyectos> {
    const proyecto = this.lgacProyectosRepository.create(nuevoProyecto);
    return this.lgacProyectosRepository.save(proyecto);
  }

  async update(
    id: number,
    proyectoActualizado: Partial<LgacProyectos>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacProyectosRepository.update(
      { id_proyecto: id },
      proyectoActualizado,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacProyectosRepository.delete({ id_proyecto: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
