import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galeria } from './galeria.entity';

@Injectable()
export class GaleriaService {
  constructor(
    @InjectRepository(Galeria)
    private readonly galeriaRepository: Repository<Galeria>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<Galeria[]> {
    return this.galeriaRepository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<Galeria | null> {
    return this.galeriaRepository.findOneBy({ id_galeria: id });
  }
}
