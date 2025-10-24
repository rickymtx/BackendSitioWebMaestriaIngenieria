import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConveniosFirmados } from './conveniosFirmados.entity';

@Injectable()
export class ConveniosFirmadosService {
  constructor(
    @InjectRepository(ConveniosFirmados)
    private readonly conveniosFirmadosRepository: Repository<ConveniosFirmados>,
  ) {}

  async findAll(): Promise<ConveniosFirmados[]> {
    return this.conveniosFirmadosRepository.find();
  }
}
