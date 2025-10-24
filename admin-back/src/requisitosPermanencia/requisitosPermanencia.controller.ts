import { Controller, Get } from '@nestjs/common';
import { RequisitosPermanenciaService } from './requisitosPermanencia.service';
import { RequisitosPermanencia } from './requisitosPermanencia.entity';

@Controller('requisitos-permanencia')
export class RequisitosPermanenciaController {
  constructor(
    private readonly requisitosService: RequisitosPermanenciaService,
  ) {}

  // Endpoint GET
  @Get()
  async getAll(): Promise<RequisitosPermanencia[]> {
    return this.requisitosService.findAll();
  }
}
