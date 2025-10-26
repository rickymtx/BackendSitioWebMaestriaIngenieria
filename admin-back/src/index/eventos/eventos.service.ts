import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './eventos.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async findAll(): Promise<Evento[]> {
    return this.eventoRepository.find();
  }

  async create(eventoData: Partial<Evento>): Promise<Evento> {
    const evento = this.eventoRepository.create(eventoData);
    return this.eventoRepository.save(evento);
  }

  async update(id: number, eventoData: Partial<Evento>): Promise<Evento> {
    await this.eventoRepository.update(id, eventoData);
    const updatedEvento = await this.eventoRepository.findOneBy({ id_evento: id });
    if (!updatedEvento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return updatedEvento;
  }

  async delete(id: number): Promise<void> {
    const result = await this.eventoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
  }
}
