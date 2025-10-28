import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
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

  @Post()
  async create(
    @Body() distribucionAsignaturasData: Partial<DistribucionAsignaturas>,
  ): Promise<DistribucionAsignaturas> {
    return this.distribucionAsignaturasService.create(distribucionAsignaturasData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() distribucionAsignaturasData: Partial<DistribucionAsignaturas>,
  ): Promise<DistribucionAsignaturas> {
    const updatedAsignatura = await this.distribucionAsignaturasService.update(id, distribucionAsignaturasData);
    if (!updatedAsignatura) {
      throw new NotFoundException(`Asignatura con id ${id} no encontrada`);
    }
    return updatedAsignatura;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    const deleted = await this.distribucionAsignaturasService.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Asignatura con id ${id} no encontrada`);
    }
    return { deleted };
  }
}
