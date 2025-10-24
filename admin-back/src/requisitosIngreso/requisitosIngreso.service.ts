import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitosIngreso, CategoriaTipo } from './requisitosIngreso.entity';

@Injectable()
export class RequisitosIngresoService {
  constructor(
    @InjectRepository(RequisitosIngreso)
    private readonly requisitosRepository: Repository<RequisitosIngreso>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<RequisitosIngreso[]> {
    return this.requisitosRepository.find();
  }

  // Obtener por categoría específica
  findByCategoria(categoria: CategoriaTipo): Promise<RequisitosIngreso[]> {
    return this.requisitosRepository.find({
      where: { categoria },
    });
  }
}
