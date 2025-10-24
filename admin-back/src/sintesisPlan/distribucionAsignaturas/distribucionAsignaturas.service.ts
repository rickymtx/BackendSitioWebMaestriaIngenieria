import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DistribucionAsignaturas } from './distribucionAsignaturas.entity';

@Injectable()
export class DistribucionAsignaturasService {
  constructor(
    @InjectRepository(DistribucionAsignaturas)
    private readonly distribucionAsignaturasRepository: Repository<DistribucionAsignaturas>,
  ) {}

  async findAll(): Promise<DistribucionAsignaturas[]> {
    return this.distribucionAsignaturasRepository.find();
  }
}
