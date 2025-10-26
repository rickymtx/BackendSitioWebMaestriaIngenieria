import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portada } from './portada.entity';

@Injectable()
export class PortadaService {
  constructor(
    @InjectRepository(Portada)
    private readonly portadaRepository: Repository<Portada>,
  ) { }

  async findAll(): Promise<Portada[]> {
    return this.portadaRepository.find();
  }

  async update(id: number, portadaData: Partial<Portada>): Promise<Portada | null> {
    const portada = await this.portadaRepository.findOne({
      where: { id_portada: id },
    });
    if (!portada) {
      return null;
    }

    Object.assign(portada, portadaData);

    return this.portadaRepository.save(portada);
  }
}
