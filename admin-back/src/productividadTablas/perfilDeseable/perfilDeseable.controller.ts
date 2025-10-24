import { Controller, Get } from '@nestjs/common';
import { PerfilDeseableService } from './perfilDeseable.service';
import { PerfilDeseable } from './perfilDeseable.entity';

@Controller('perfil-deseable')
export class PerfilDeseableController {
  constructor(private readonly perfilDeseableService: PerfilDeseableService) {}

  // Endpoint GET para obtener todos los registros
  @Get()
  findAll(): Promise<PerfilDeseable[]> {
    return this.perfilDeseableService.findAll();
  }
}
