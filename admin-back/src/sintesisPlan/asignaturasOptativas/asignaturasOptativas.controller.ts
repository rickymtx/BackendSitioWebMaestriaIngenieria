import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AsignaturasOptativasService } from './asignaturasOptativas.service';
import { AsignaturasOptativas } from './asignaturasOptativas.entity';

@Controller('asignaturas-optativas')
export class asignaturasOptativasController {
  constructor(private readonly asignaturasService: AsignaturasOptativasService) {}

  @Get()
  async getAll(): Promise<AsignaturasOptativas[]> {
    try {
      return await this.asignaturasService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener las asignaturas optativas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() asignaturaData: Partial<AsignaturasOptativas>): Promise<AsignaturasOptativas> {
    try {
      return await this.asignaturasService.create(asignaturaData);
    } catch (error) {
      throw new HttpException(
        'Error al crear la asignatura optativa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() asignaturaData: Partial<AsignaturasOptativas>,
  ): Promise<AsignaturasOptativas> {
    try {
      return await this.asignaturasService.update(id, asignaturaData);
    } catch (error) {
      throw new HttpException(
        'Error al actualizar la asignatura optativa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    try {
      return await this.asignaturasService.delete(id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar la asignatura optativa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
