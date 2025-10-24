import { Controller, Get, Param } from '@nestjs/common';
import { LgacArticulos2Service } from './lgacArticulos2.service';
import { LgacArticulos2 } from './lgacArticulos2.entity';

@Controller('lgac-articulos2')
export class LgacArticulos2Controller {
  constructor(private readonly lgacArticulos2Service: LgacArticulos2Service) {}

  // GET /lgac-articulos2
  @Get()
  findAll(): Promise<LgacArticulos2[]> {
    return this.lgacArticulos2Service.findAll();
  }

  // GET /lgac-articulos2/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacArticulos2 | null> {
    return this.lgacArticulos2Service.findOne(id);
  }
}
