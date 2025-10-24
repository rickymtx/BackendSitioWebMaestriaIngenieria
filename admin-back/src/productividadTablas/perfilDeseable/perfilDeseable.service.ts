import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerfilDeseable } from './perfilDeseable.entity';

@Injectable()
export class PerfilDeseableService {
  constructor(
    @InjectRepository(PerfilDeseable)
    private perfilDeseableRepository: Repository<PerfilDeseable>,
  ) {}

  // Método para obtener todos los registros
  findAll(): Promise<PerfilDeseable[]> {
    return this.perfilDeseableRepository.find();
  }
}
