import { Controller, Get } from '@nestjs/common';
import { OrientacionProfesionalService } from './orientacionProfesional.service';
import { OrientacionProfesional } from './orientacionProfesional.entity';

@Controller('orientacion-profesional')
export class OrientacionProfesionalController {
  constructor(
    private readonly orientacionProfesionalService: OrientacionProfesionalService,
  ) {}

  @Get()
  async getAll(): Promise<OrientacionProfesional[]> {
    return this.orientacionProfesionalService.findAll();
  }
}
