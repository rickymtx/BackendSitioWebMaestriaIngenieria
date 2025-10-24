import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos3 } from './lgacArticulos3.entity';

@Injectable()
export class LgacArticulos3Service {
  constructor(
    @InjectRepository(LgacArticulos3)
    private readonly lgacArticulos3Repository: Repository<LgacArticulos3>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos3[]> {
    return this.lgacArticulos3Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacArticulos3 | null> {
    return this.lgacArticulos3Repository.findOneBy({ id_articulo: id });
  }
}

