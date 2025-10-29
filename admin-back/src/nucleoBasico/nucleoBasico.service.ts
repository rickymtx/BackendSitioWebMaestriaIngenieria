import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NucleoBasico } from './nucleoBasico.entity';

@Injectable()
export class NucleoBasicoService {
  constructor(
    @InjectRepository(NucleoBasico)
    private readonly nucleoBasicoRepository: Repository<NucleoBasico>,
  ) {}

  async findAll(): Promise<NucleoBasico[]> {
    return this.nucleoBasicoRepository.find({ relations: ['cvu'] });
  }
}
