import { Controller, Get, Param } from '@nestjs/common';
import { LgacArticulosService } from './lgacArticulos.service';
import { LgacArticulos } from './lgacArticulos.entity';

@Controller('lgac-articulos')
export class LgacArticulosController {
  constructor(private readonly lgacArticulosService: LgacArticulosService) {}

  // GET /lgac-articulos
  @Get()
  findAll(): Promise<LgacArticulos[]> {
    return this.lgacArticulosService.findAll();
  }

  // GET /lgac-articulos/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacArticulos | null> {
    return this.lgacArticulosService.findOne(id);
  }
}
