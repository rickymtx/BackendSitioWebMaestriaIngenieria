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

  // Obtener todos los registros
  findAll(): Promise<LgacProyectos4[]> {
    return this.lgacProyectos4Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacProyectos4 | null> {
    return this.lgacProyectos4Repository.findOneBy({ id_proyecto: id });
  }
}
