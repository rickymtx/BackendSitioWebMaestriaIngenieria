import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { EgresadosService } from './egresados.service';
import { Egresados } from './egresados.entity';

@Controller('egresados')
export class EgresadosController {
  constructor(private readonly egresadosService: EgresadosService) {}

  // GET /egresados
  @Get()
  async getAll(): Promise<Egresados[]> {
    return this.egresadosService.findAll();
  }

  // GET /egresados/:id
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Egresados> {
    return this.egresadosService.findOne(id);
  }

  // PUT /egresados/:id
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatedData: Partial<Egresados>,
  ): Promise<Egresados> {
    return this.egresadosService.update(id, updatedData);
  }
}
