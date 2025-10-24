import { Controller, Get } from '@nestjs/common';
import { RequisitosGradoService } from './requisitosGrado.service';
import { RequisitosGrado } from './requisitosGrado.entity';

@Controller('requisitos-grado')
export class RequisitosGradoController {
  constructor(
    private readonly requisitosService: RequisitosGradoService,
  ) {}

  // Endpoint GET
  @Get()
  async getAll(): Promise<RequisitosGrado[]> {
    return this.requisitosService.findAll();
  }
}
