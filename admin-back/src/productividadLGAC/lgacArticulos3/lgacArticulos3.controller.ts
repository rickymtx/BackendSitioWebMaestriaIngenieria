import { Controller, Get, Param } from '@nestjs/common';
import { LgacArticulos3Service } from './lgacArticulos3.service';
import { LgacArticulos3 } from './lgacArticulos3.entity';

@Controller('lgac-articulos3')
export class LgacArticulos3Controller {
  constructor(private readonly lgacArticulos3Service: LgacArticulos3Service) {}

  // GET /lgac-articulos3
  @Get()
  findAll(): Promise<LgacArticulos3[]> {
    return this.lgacArticulos3Service.findAll();
  }

  // GET /lgac-articulos3/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacArticulos3 | null> {
    return this.lgacArticulos3Service.findOne(id);
  }
}
