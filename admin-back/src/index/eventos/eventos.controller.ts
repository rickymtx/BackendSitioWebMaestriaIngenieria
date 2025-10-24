import { Controller, Get } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { Evento } from './eventos.entity';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  async getAllEventos(): Promise<Evento[]> {
    return this.eventosService.findAll();
  }
}
