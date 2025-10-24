import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cohorte } from './cohorte.entity';

@Injectable()
export class CohorteService {
  constructor(
    @InjectRepository(Cohorte)
    private readonly cohorteRepository: Repository<Cohorte>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<Cohorte[]> {
    return this.cohorteRepository.find();
  }

  // Obtener un registro por ID (opcional)
  findOne(id: number): Promise<Cohorte | null> {
    return this.cohorteRepository.findOneBy({ id_cohorte: id });
  }
}
