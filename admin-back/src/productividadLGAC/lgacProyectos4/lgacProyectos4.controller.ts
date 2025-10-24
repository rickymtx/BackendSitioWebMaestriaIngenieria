import { Controller, Get, Param } from '@nestjs/common';
import { LgacProyectos4Service } from './lgacProyectos4.service';
import { LgacProyectos4 } from './lgacProyectos4.entity';

@Controller('lgac-proyectos4')
export class LgacProyectos4Controller {
  constructor(private readonly lgacProyectos4Service: LgacProyectos4Service) {}

  // GET /lgac-proyectos4
  @Get()
  findAll(): Promise<LgacProyectos4[]> {
    return this.lgacProyectos4Service.findAll();
  }

  // GET /lgac-proyectos4/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacProyectos4 | null> {
    return this.lgacProyectos4Service.findOne(id);
  }
}
