import { Controller, Get, Param } from '@nestjs/common';
import { LgacCapitulosService } from './lgacCapitulos.service';
import { LgacCapitulos } from './lgacCapitulos.entity';

@Controller('lgac-capitulos')
export class LgacCapitulosController {
  constructor(private readonly lgacCapitulosService: LgacCapitulosService) {}

  // GET /lgac-capitulos
  @Get()
  findAll(): Promise<LgacCapitulos[]> {
    return this.lgacCapitulosService.findAll();
  }

  // GET /lgac-capitulos/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos | null> {
    return this.lgacCapitulosService.findOne(id);
  }
}
