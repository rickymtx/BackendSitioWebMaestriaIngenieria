import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RequisitosPermanenciaService } from './requisitosPermanencia.service';
import { RequisitosPermanencia } from './requisitosPermanencia.entity';

@Controller('requisitos-permanencia')
export class RequisitosPermanenciaController {
  constructor(
    private readonly requisitosService: RequisitosPermanenciaService,
  ) {}

  // Endpoint GET
  @Get()
  async getAll(): Promise<RequisitosPermanencia[]> {
    return this.requisitosService.findAll();
  }

  // Endpoint POST
  @Post()
  async create(@Body() data: { descripcion: string }): Promise<RequisitosPermanencia> {
    return this.requisitosService.create(data);
  }

  // Endpoint PUT
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: { descripcion: string },
  ): Promise<{ updated: boolean }> {
    return this.requisitosService.update(id, data);
  }

  // Endpoint DELETE
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.requisitosService.delete(id);
  }
}
