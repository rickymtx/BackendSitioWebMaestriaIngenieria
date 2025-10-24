import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitosPermanencia } from './requisitosPermanencia.entity';

@Injectable()
export class RequisitosPermanenciaService {
  constructor(
    @InjectRepository(RequisitosPermanencia)
    private readonly requisitosRepository: Repository<RequisitosPermanencia>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<RequisitosPermanencia[]> {
    return this.requisitosRepository.find();
  }
}
