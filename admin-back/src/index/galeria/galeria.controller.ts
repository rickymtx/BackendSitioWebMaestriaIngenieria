import { Controller, Get, Param } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { Galeria } from './galeria.entity';

@Controller('galeria')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  // GET /galeria
  @Get()
  findAll(): Promise<Galeria[]> {
    return this.galeriaService.findAll();
  }

  // GET /galeria/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Galeria | null> {
    return this.galeriaService.findOne(id);
  }
}
