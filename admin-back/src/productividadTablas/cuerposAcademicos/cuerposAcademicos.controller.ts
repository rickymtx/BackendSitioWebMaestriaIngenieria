import { Controller, Get } from '@nestjs/common';
import { CuerposAcademicosService } from './cuerposAcademicos.service';
import { CuerpoAcademico } from './cuerposAcademicos.entity';

@Controller('cuerpos-academicos')
export class CuerposAcademicosController {
  constructor(private readonly cuerposService: CuerposAcademicosService) {}

  @Get()
  findAll(): Promise<CuerpoAcademico[]> {
    return this.cuerposService.findAll();
  }
}
