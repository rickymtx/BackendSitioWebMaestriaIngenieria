import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos2 } from './lgacCapitulos2.entity';

@Injectable()
export class LgacCapitulos2Service {
  constructor(
    @InjectRepository(LgacCapitulos2)
    private readonly lgacCapitulos2Repository: Repository<LgacCapitulos2>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacCapitulos2[]> {
    return this.lgacCapitulos2Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacCapitulos2 | null> {
    return this.lgacCapitulos2Repository.findOneBy({ id_capitulo: id });
  }
}
