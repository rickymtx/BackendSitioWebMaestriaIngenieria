import { Controller, Get, Param } from '@nestjs/common';
import { LgacArticulos4Service } from './lgacArticulos4.service';
import { LgacArticulos4 } from './lgacArticulos4.entity';

@Controller('lgac-articulos4')
export class LgacArticulos4Controller {
  constructor(private readonly lgacArticulos4Service: LgacArticulos4Service) {}

  // GET /lgac-articulos4
  @Get()
  findAll(): Promise<LgacArticulos4[]> {
    return this.lgacArticulos4Service.findAll();
  }

  // GET /lgac-articulos4/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacArticulos4 | null> {
    return this.lgacArticulos4Service.findOne(id);
  }
}
