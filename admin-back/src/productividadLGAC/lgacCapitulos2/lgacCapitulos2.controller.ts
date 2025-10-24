import { Controller, Get, Param } from '@nestjs/common';
import { LgacCapitulos2Service } from './lgacCapitulos2.service';
import { LgacCapitulos2 } from './lgacCapitulos2.entity';

@Controller('lgac-capitulos2')
export class LgacCapitulos2Controller {
  constructor(private readonly lgacCapitulos2Service: LgacCapitulos2Service) {}

  // GET /lgac-capitulos2
  @Get()
  findAll(): Promise<LgacCapitulos2[]> {
    return this.lgacCapitulos2Service.findAll();
  }

  // GET /lgac-capitulos2/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos2 | null> {
    return this.lgacCapitulos2Service.findOne(id);
  }
}
