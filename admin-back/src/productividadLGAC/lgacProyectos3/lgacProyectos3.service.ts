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

  // Obtener todos los registros
  findAll(): Promise<LgacProyectos3[]> {
    return this.lgacProyectos3Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacProyectos3 | null> {
    return this.lgacProyectos3Repository.findOneBy({ id_proyecto: id });
  }
}
