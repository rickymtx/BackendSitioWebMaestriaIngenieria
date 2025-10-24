import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos3 } from './lgacCapitulos3.entity';

@Injectable()
export class LgacCapitulos3Service {
  constructor(
    @InjectRepository(LgacCapitulos3)
    private readonly lgacCapitulos3Repository: Repository<LgacCapitulos3>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacCapitulos3[]> {
    return this.lgacCapitulos3Repository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacCapitulos3 | null> {
    return this.lgacCapitulos3Repository.findOneBy({ id_capitulo: id });
  }
}
