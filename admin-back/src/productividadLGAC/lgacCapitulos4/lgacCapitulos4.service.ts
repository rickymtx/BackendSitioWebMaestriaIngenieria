import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos4 } from './lgacCapitulos4.entity';

@Injectable()
export class LgacCapitulos4Service {
  constructor(
    @InjectRepository(LgacCapitulos4)
    private readonly lgacCapitulos4Repository: Repository<LgacCapitulos4>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacCapitulos4[]> {
    return this.lgacCapitulos4Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacCapitulos4 | null> {
    return this.lgacCapitulos4Repository.findOneBy({ id_capitulo: id });
  }
}
