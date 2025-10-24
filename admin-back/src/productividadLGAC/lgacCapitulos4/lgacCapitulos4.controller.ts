import { Controller, Get, Param } from '@nestjs/common';
import { LgacCapitulos4Service } from './lgacCapitulos4.service';
import { LgacCapitulos4 } from './lgacCapitulos4.entity';

@Controller('lgac-capitulos4')
export class LgacCapitulos4Controller {
  constructor(private readonly lgacCapitulos4Service: LgacCapitulos4Service) {}

  // GET /lgac-capitulos4
  @Get()
  findAll(): Promise<LgacCapitulos4[]> {
    return this.lgacCapitulos4Service.findAll();
  }

  // GET /lgac-capitulos4/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos4 | null> {
    return this.lgacCapitulos4Service.findOne(id);
  }
}
