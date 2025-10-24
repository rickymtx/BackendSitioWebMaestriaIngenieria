import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SistemaNacional } from './sistemaNacional.entity';

@Injectable()
export class SistemaNacionalService {
  constructor(
    @InjectRepository(SistemaNacional)
    private sistemaNacionalRepository: Repository<SistemaNacional>,
  ) {}

  // Método GET: obtener todos los registros
  findAll(): Promise<SistemaNacional[]> {
    return this.sistemaNacionalRepository.find();
  }
}
