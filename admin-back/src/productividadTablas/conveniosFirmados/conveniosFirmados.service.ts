import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConveniosFirmados } from './conveniosFirmados.entity';

@Injectable()
export class ConveniosFirmadosService {
  constructor(
    @InjectRepository(ConveniosFirmados)
    private readonly conveniosFirmadosRepository: Repository<ConveniosFirmados>,
  ) { }

  async findAll(): Promise<ConveniosFirmados[]> {
    return this.conveniosFirmadosRepository.find();
  }

  async update(id: number, data: Partial<ConveniosFirmados>): Promise<ConveniosFirmados | null> {
    const convenio = await this.conveniosFirmadosRepository.findOneBy({ id_convenios: id });
    if (!convenio) {
      return null;
    }
    Object.assign(convenio, data);
    return this.conveniosFirmadosRepository.save(convenio);
  }
}
