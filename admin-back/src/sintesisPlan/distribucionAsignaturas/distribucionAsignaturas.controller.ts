import { Controller, Get } from '@nestjs/common';
import { DistribucionAsignaturasService } from './distribucionAsignaturas.service';
import { DistribucionAsignaturas } from './distribucionAsignaturas.entity';

@Controller('distribucion-asignaturas')
export class DistribucionAsignaturasController {
  constructor(
    private readonly distribucionAsignaturasService: DistribucionAsignaturasService,
  ) {}

  @Get()
  async getAll(): Promise<DistribucionAsignaturas[]> {
    return this.distribucionAsignaturasService.findAll();
  }
}
