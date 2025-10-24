import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos } from './lgacArticulos.entity';

@Injectable()
export class LgacArticulosService {
  constructor(
    @InjectRepository(LgacArticulos)
    private readonly lgacArticulosRepository: Repository<LgacArticulos>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos[]> {
    return this.lgacArticulosRepository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacArticulos | null> {
    return this.lgacArticulosRepository.findOneBy({ id_articulo: id });
  }
}
