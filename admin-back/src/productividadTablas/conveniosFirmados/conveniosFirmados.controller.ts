import { Controller, Get, Put, Param, Body, NotFoundException } from '@nestjs/common';
import { ConveniosFirmadosService } from './conveniosFirmados.service';
import { ConveniosFirmados } from './conveniosFirmados.entity';

@Controller('convenios-firmados')
export class ConveniosFirmadosController {
  constructor(private readonly conveniosFirmadosService: ConveniosFirmadosService) {}

  @Get()
  async getAll(): Promise<ConveniosFirmados[]> {
    return this.conveniosFirmadosService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<ConveniosFirmados>
  ): Promise<ConveniosFirmados> {
    const updated = await this.conveniosFirmadosService.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Convenio con ID ${id} no encontrado`);
    }
    return updated;
  }
}
