import { Controller, Get, Param } from '@nestjs/common';
import { LgacCapitulos3Service } from './lgacCapitulos3.service';
import { LgacCapitulos3 } from './lgacCapitulos3.entity';

@Controller('lgac-capitulos3')
export class LgacCapitulos3Controller {
  constructor(private readonly lgacCapitulos3Service: LgacCapitulos3Service) {}

  // GET /lgac-capitulos3
  @Get()
  findAll(): Promise<LgacCapitulos3[]> {
    return this.lgacCapitulos3Service.findAll();
  }

  // GET /lgac-capitulos3/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos3 | null> {
    return this.lgacCapitulos3Service.findOne(id);
  }
}
