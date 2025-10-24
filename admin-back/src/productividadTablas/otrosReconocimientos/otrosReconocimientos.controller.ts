import { Controller, Get } from '@nestjs/common';
import { OtrosReconocimientosService } from './otrosReconocimientos.service';
import { OtrosReconocimientos } from './otrosReconocimientos.entity';

@Controller('otros-reconocimientos')
export class OtrosReconocimientosController {
  constructor(private readonly otrosReconocimientosService: OtrosReconocimientosService) {}

  // Endpoint GET para obtener todos los registros
  @Get()
  findAll(): Promise<OtrosReconocimientos[]> {
    return this.otrosReconocimientosService.findAll();
  }
}
