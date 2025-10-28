import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

  // Endpoint POST
  @Post()
  async create(@Body() requisitoData: RequisitosGrado): Promise<RequisitosGrado> {
    return this.requisitosService.create(requisitoData);
  }

  // Endpoint PUT
  @Put(':id_grado')
  async update(
    @Param('id_grado') id_grado: number,
    @Body() requisitoData: Partial<RequisitosGrado>,
  ): Promise<RequisitosGrado> {
    return this.requisitosService.update(id_grado, requisitoData);
  }

  // Endpoint DELETE
  @Delete(':id_grado')
  async remove(@Param('id_grado') id_grado: number): Promise<{ deleted: boolean }> {
    return this.requisitosService.remove(id_grado);
  }
}
