import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { Galeria } from './galeria.entity';

@Controller('galeria')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  // GET /galeria
  @Get()
  findAll(): Promise<Galeria[]> {
    return this.galeriaService.findAll();
  }

  // GET /galeria/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Galeria | null> {
    return this.galeriaService.findOne(id);
  }

  // POST /galeria
  @Post()
  create(@Body() data: Partial<Galeria>): Promise<Galeria> {
    return this.galeriaService.create(data);
  }

  // PUT /galeria/:id
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Galeria>): Promise<Galeria | { message: string }> {
    const resultado = await this.galeriaService.update(id, data);
    if (!resultado) {
      return { message: 'Galería no encontrada' };
    }
    return resultado;
  }

  // DELETE /galeria/:id
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    const eliminado = await this.galeriaService.remove(id);
    if (eliminado) {
      return { message: 'Galería eliminada correctamente' };
    } else {
      return { message: 'Galería no encontrada' };
    }
  }
}
