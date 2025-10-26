import { Controller, Get, Put, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PortadaService } from './portada.service';
import { Portada } from './portada.entity';

@Controller('portada')
export class PortadaController {
  constructor(private readonly portadaService: PortadaService) {}

  // GET /portada
  @Get()
  async getAll(): Promise<Portada[]> {
    return this.portadaService.findAll();
  }

  // PUT /portada/:id
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() portadaData: Partial<Portada>,
  ): Promise<Portada> {
    const updated = await this.portadaService.update(id, portadaData);
    if (!updated) {
      throw new HttpException('Portada no encontrada', HttpStatus.NOT_FOUND);
    }
    return updated;
  }
}
