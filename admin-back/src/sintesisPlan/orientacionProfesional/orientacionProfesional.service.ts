import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrientacionProfesional } from './orientacionProfesional.entity';

@Injectable()
export class OrientacionProfesionalService {
  constructor(
    @InjectRepository(OrientacionProfesional)
    private readonly orientacionProfesionalRepository: Repository<OrientacionProfesional>,
  ) {}

  async findAll(): Promise<OrientacionProfesional[]> {
    return this.orientacionProfesionalRepository.find();
  }
}
