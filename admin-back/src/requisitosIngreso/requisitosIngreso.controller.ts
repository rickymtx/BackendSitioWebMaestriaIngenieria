import { Controller, Get, Param } from '@nestjs/common';
import { RequisitosIngresoService } from './requisitosIngreso.service';
import { RequisitosIngreso } from './requisitosIngreso.entity';
import type { CategoriaTipo } from './requisitosIngreso.entity';

@Controller('requisitos-ingreso')
export class RequisitosIngresoController {
  constructor(
    private readonly requisitosService: RequisitosIngresoService,
  ) {}

  // GET general: devuelve todos los registros
  @Get()
  async getAll(): Promise<RequisitosIngreso[]> {
    return this.requisitosService.findAll();
  }

  // GET por categoría: /requisitos-ingreso/categoria/antecedentes
  @Get('categoria/:categoria')
  async getByCategoria(
    @Param('categoria') categoria: CategoriaTipo,
  ): Promise<RequisitosIngreso[]> {
    return this.requisitosService.findByCategoria(categoria);
  }
}
