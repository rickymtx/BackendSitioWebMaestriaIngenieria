import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
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
}
