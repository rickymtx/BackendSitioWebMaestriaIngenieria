import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParticipacionRedes } from './participacionRedes.entity';

@Injectable()
export class ParticipacionRedesService {
  constructor(
    @InjectRepository(ParticipacionRedes)
    private participacionRedesRepository: Repository<ParticipacionRedes>,
  ) {}

  // Método para obtener todos los registros
  findAll(): Promise<ParticipacionRedes[]> {
    return this.participacionRedesRepository.find();
  }
}
