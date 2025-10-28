import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RequisitosIngresoService } from './requisitosIngreso.service';
import { RequisitosIngreso } from './requisitosIngreso.entity';
import type { CategoriaTipo } from './requisitosIngreso.entity';

@Controller('requisitos-ingreso')
export class RequisitosIngresoController {
  constructor(
    private readonly requisitosService: RequisitosIngresoService,
  ) {}

  // GET general
  @Get()
  async getAll(): Promise<RequisitosIngreso[]> {
    return this.requisitosService.findAll();
  }

  // GET por categoría
  @Get('categoria/:categoria')
  async getByCategoria(
    @Param('categoria') categoria: CategoriaTipo,
  ): Promise<RequisitosIngreso[]> {
    return this.requisitosService.findByCategoria(categoria);
  }

  // POST nuevo registro
  @Post()
  async create(
    @Body() data: { categoria: CategoriaTipo; descripcion: string },
  ): Promise<RequisitosIngreso> {
    return this.requisitosService.create(data);
  }

  // PUT actualizar un registro
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: { categoria?: CategoriaTipo; descripcion?: string },
  ): Promise<{ updated: boolean }> {
    return this.requisitosService.update(id, data);
  }

  // DELETE eliminar un registro
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.requisitosService.delete(id);
  }
}
