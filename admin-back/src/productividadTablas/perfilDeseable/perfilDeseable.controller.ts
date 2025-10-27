import { Controller, Get, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PerfilDeseableService } from './perfilDeseable.service';
import { PerfilDeseable } from './perfilDeseable.entity';

@Controller('perfil-deseable')
export class PerfilDeseableController {
  constructor(private readonly perfilDeseableService: PerfilDeseableService) {}

  @Get()
  findAll(): Promise<PerfilDeseable[]> {
    return this.perfilDeseableService.findAll();
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosActualizados: Partial<PerfilDeseable>,
  ): Promise<PerfilDeseable> {
    return this.perfilDeseableService.update(id, datosActualizados);
  }
}
