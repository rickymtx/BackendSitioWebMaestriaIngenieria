import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
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
}
