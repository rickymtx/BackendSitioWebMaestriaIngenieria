import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos2 } from './lgacArticulos2.entity';

@Injectable()
export class LgacArticulos2Service {
  constructor(
    @InjectRepository(LgacArticulos2)
    private readonly lgacArticulos2Repository: Repository<LgacArticulos2>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos2[]> {
    return this.lgacArticulos2Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacArticulos2 | null> {
    return this.lgacArticulos2Repository.findOneBy({ id_articulo: id });
  }
}

