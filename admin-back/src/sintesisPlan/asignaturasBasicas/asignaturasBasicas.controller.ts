import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AsignaturasBasicasService } from './asignaturasBasicas.service';
import { AsignaturasBasicas } from './asignaturasBasicas.entity';

@Controller('asignaturas-basicas')
export class AsignaturasBasicasController {
  constructor(private readonly asignaturasService: AsignaturasBasicasService) {}

  @Get()
  async getAll(): Promise<AsignaturasBasicas[]> {
    try {
      return await this.asignaturasService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener las asignaturas básicas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() asignaturaData: { materia: string; creditos: number }): Promise<AsignaturasBasicas> {
    try {
      return await this.asignaturasService.create(asignaturaData);
    } catch (error) {
      throw new HttpException(
        'Error al crear la asignatura básica',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() asignaturaData: { materia?: string; creditos?: number },
  ): Promise<{ updated: boolean }> {
    try {
      const updated = await this.asignaturasService.update(id, asignaturaData);
      if (!updated) {
        throw new HttpException('Asignatura no encontrada', HttpStatus.NOT_FOUND);
      }
      return { updated: true };
    } catch (error) {
      throw new HttpException(
        'Error al actualizar la asignatura básica',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    try {
      const deleted = await this.asignaturasService.remove(id);
      if (!deleted) {
        throw new HttpException('Asignatura no encontrada', HttpStatus.NOT_FOUND);
      }
      return { deleted: true };
    } catch (error) {
      throw new HttpException(
        'Error al eliminar la asignatura básica',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
