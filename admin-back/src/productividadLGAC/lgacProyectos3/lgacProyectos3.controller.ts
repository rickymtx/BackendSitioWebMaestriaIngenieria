import { Controller, Get, Param } from '@nestjs/common';
import { LgacProyectos3Service } from './lgacProyectos3.service';
import { LgacProyectos3 } from './lgacProyectos3.entity';

@Controller('lgac-proyectos3')
export class LgacProyectos3Controller {
  constructor(private readonly lgacProyectos3Service: LgacProyectos3Service) {}

  // GET /lgac-proyectos3
  @Get()
  findAll(): Promise<LgacProyectos3[]> {
    return this.lgacProyectos3Service.findAll();
  }

  // GET /lgac-proyectos3/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacProyectos3 | null> {
    return this.lgacProyectos3Service.findOne(id);
  }
}
