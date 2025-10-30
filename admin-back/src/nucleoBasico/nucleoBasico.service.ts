import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NucleoBasico } from './nucleoBasico.entity';
import { NucleoBasicoCvu } from './nucleoBasicoCvu.entity';

@Injectable()
export class NucleoBasicoService {
  constructor(
    @InjectRepository(NucleoBasico)
    private readonly nucleoBasicoRepository: Repository<NucleoBasico>,
  ) {}

  async findAll(): Promise<NucleoBasico[]> {
    return this.nucleoBasicoRepository.find({ relations: ['cvu'] });
  }

  async create(data: Partial<NucleoBasico>): Promise<NucleoBasico> {
    const nuevoProfesor = this.nucleoBasicoRepository.create(data);
    return this.nucleoBasicoRepository.save(nuevoProfesor);
  }
}
