import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacProyectos3 } from './lgacProyectos3.entity';

@Injectable()
export class LgacProyectos3Service {
  constructor(
    @InjectRepository(LgacProyectos3)
    private readonly lgacProyectos3Repository: Repository<LgacProyectos3>,
  ) {}

  findAll(): Promise<LgacProyectos3[]> {
    return this.lgacProyectos3Repository.find();
  }

  findOne(id: number): Promise<LgacProyectos3 | null> {
    return this.lgacProyectos3Repository.findOneBy({ id_proyecto: id });
  }

  async create(nuevoProyecto: LgacProyectos3): Promise<LgacProyectos3> {
    const proyecto = this.lgacProyectos3Repository.create(nuevoProyecto);
    return this.lgacProyectos3Repository.save(proyecto);
  }

  async update(
    id: number,
    proyectoActualizado: Partial<LgacProyectos3>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacProyectos3Repository.update(
      { id_proyecto: id },
      proyectoActualizado,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacProyectos3Repository.delete({ id_proyecto: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
