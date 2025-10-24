import { Controller, Get } from '@nestjs/common';
import { PortadaService } from './portada.service';
import { Portada } from './portada.entity';

@Controller('portada')
export class PortadaController {
  constructor(private readonly portadaService: PortadaService) {}

  // GET /portada
  @Get()
  async getAll(): Promise<Portada[]> {
    return this.portadaService.findAll();
  }
}
