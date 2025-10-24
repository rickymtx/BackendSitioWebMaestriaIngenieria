import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuerpoAcademico } from './cuerposAcademicos.entity';

@Injectable()
export class CuerposAcademicosService {
  constructor(
    @InjectRepository(CuerpoAcademico)
    private cuerposRepository: Repository<CuerpoAcademico>,
  ) {}

  // Obtener todos los cuerpos académicos con sus integrantes
  findAll(): Promise<CuerpoAcademico[]> {
    return this.cuerposRepository.find({
      relations: ['integrantes'], // Incluye la relación
    });
  }
}
