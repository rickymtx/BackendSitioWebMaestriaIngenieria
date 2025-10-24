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

  // Obtener todos los registros
  findAll(): Promise<LgacProyectos[]> {
    return this.lgacProyectosRepository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacProyectos | null> {
    return this.lgacProyectosRepository.findOneBy({ id_proyecto: id });
  }
}
