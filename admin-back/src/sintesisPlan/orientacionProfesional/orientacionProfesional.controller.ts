import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

  @Post()
  async create(@Body() data: Partial<OrientacionProfesional>): Promise<OrientacionProfesional> {
    return this.orientacionProfesionalService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<OrientacionProfesional>,
  ): Promise<OrientacionProfesional> {
    return this.orientacionProfesionalService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.orientacionProfesionalService.delete(id);
  }
}
