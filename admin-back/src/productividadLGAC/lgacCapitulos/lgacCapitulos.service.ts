import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos } from './lgacCapitulos.entity';

@Injectable()
export class LgacCapitulosService {
  constructor(
    @InjectRepository(LgacCapitulos)
    private readonly lgacCapitulosRepository: Repository<LgacCapitulos>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacCapitulos[]> {
    return this.lgacCapitulosRepository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<LgacCapitulos | null> {
    return this.lgacCapitulosRepository.findOneBy({ id_capitulo: id });
  }
}
