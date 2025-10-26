import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { Evento } from './eventos.entity';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  async getAllEventos(): Promise<Evento[]> {
    return this.eventosService.findAll();
  }

  @Post()
  async createEvento(@Body() eventoData: Partial<Evento>): Promise<Evento> {
    return this.eventosService.create(eventoData);
  }

  @Put(':id')
  async updateEvento(
    @Param('id') id: number,
    @Body() eventoData: Partial<Evento>,
  ): Promise<Evento> {
    return this.eventosService.update(id, eventoData);
  }

  @Delete(':id')
  async deleteEvento(@Param('id') id: number): Promise<void> {
    return this.eventosService.delete(id);
  }
}
