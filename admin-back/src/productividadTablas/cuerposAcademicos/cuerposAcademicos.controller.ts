import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CuerposAcademicosService } from './cuerposAcademicos.service';
import { CuerpoAcademico } from './cuerposAcademicos.entity';

@Controller('cuerpos-academicos')
export class CuerposAcademicosController {
  constructor(private readonly cuerposService: CuerposAcademicosService) {}

  @Get()
  findAll(): Promise<CuerpoAcademico[]> {
    return this.cuerposService.findAll();
  }

  @Post()
  create(@Body() body: { nomProy: string; integrantes?: { nombre: string }[] }): Promise<CuerpoAcademico> {
    return this.cuerposService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { nomProy?: string; integrantes?: { nombre: string }[] },
  ): Promise<CuerpoAcademico> {
    return this.cuerposService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.cuerposService.delete(+id);
  }
}
