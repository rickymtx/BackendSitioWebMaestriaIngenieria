import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacProyectos2 } from './lgacProyectos2.entity';

@Injectable()
export class LgacProyectos2Service {
  constructor(
    @InjectRepository(LgacProyectos2)
    private readonly lgacProyectos2Repository: Repository<LgacProyectos2>,
  ) {}

  findAll(): Promise<LgacProyectos2[]> {
    return this.lgacProyectos2Repository.find();
  }

  findOne(id: number): Promise<LgacProyectos2 | null> {
    return this.lgacProyectos2Repository.findOneBy({ id_proyecto: id });
  }

  async create(nuevoProyecto: LgacProyectos2): Promise<LgacProyectos2> {
    const proyecto = this.lgacProyectos2Repository.create(nuevoProyecto);
    return this.lgacProyectos2Repository.save(proyecto);
  }

  async update(
    id: number,
    proyectoActualizado: Partial<LgacProyectos2>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacProyectos2Repository.update(
      { id_proyecto: id },
      proyectoActualizado,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacProyectos2Repository.delete({ id_proyecto: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
