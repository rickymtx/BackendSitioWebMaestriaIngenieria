import { Controller, Get } from '@nestjs/common';
import { ParticipacionRedesService } from './participacionRedes.service';
import { ParticipacionRedes } from './participacionRedes.entity';

@Controller('participacion-redes')
export class ParticipacionRedesController {
  constructor(private readonly participacionRedesService: ParticipacionRedesService) {}

  // Endpoint GET para obtener todos los registros
  @Get()
  findAll(): Promise<ParticipacionRedes[]> {
    return this.participacionRedesService.findAll();
  }
}
