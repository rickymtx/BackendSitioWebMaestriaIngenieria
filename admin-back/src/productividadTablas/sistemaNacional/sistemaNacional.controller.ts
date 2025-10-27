import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { SistemaNacionalService } from './sistemaNacional.service';
import { SistemaNacional } from './sistemaNacional.entity';

@Controller('sistema-nacional')
export class SistemaNacionalController {
  constructor(private readonly sistemaNacionalService: SistemaNacionalService) {}

  @Get()
  findAll(): Promise<SistemaNacional[]> {
    return this.sistemaNacionalService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() datosActualizados: Partial<SistemaNacional>,
  ) {
    return this.sistemaNacionalService.update(id, datosActualizados);
  }
}
