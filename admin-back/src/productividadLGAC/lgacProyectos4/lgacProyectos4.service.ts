import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacProyectos4 } from './lgacProyectos4.entity';

@Injectable()
export class LgacProyectos4Service {
  constructor(
    @InjectRepository(LgacProyectos4)
    private readonly lgacProyectos4Repository: Repository<LgacProyectos4>,
  ) {}

  findAll(): Promise<LgacProyectos4[]> {
    return this.lgacProyectos4Repository.find();
  }

  findOne(id: number): Promise<LgacProyectos4 | null> {
    return this.lgacProyectos4Repository.findOneBy({ id_proyecto: id });
  }

  async create(nuevoProyecto: LgacProyectos4): Promise<LgacProyectos4> {
    const proyecto = this.lgacProyectos4Repository.create(nuevoProyecto);
    return this.lgacProyectos4Repository.save(proyecto);
  }

  async update(
    id: number,
    proyectoActualizado: Partial<LgacProyectos4>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacProyectos4Repository.update(
      { id_proyecto: id },
      proyectoActualizado,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacProyectos4Repository.delete({ id_proyecto: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
