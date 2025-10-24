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

  // Obtener todos los registros
  findAll(): Promise<LgacProyectos2[]> {
    return this.lgacProyectos2Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacProyectos2 | null> {
    return this.lgacProyectos2Repository.findOneBy({ id_proyecto: id });
  }
}
