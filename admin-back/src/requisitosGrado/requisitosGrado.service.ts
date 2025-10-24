import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitosGrado } from './requisitosGrado.entity';

@Injectable()
export class RequisitosGradoService {
  constructor(
    @InjectRepository(RequisitosGrado)
    private readonly requisitosRepository: Repository<RequisitosGrado>,
  ) {}

  // Método para obtener todos los registros
  findAll(): Promise<RequisitosGrado[]> {
    return this.requisitosRepository.find();
  }
}
