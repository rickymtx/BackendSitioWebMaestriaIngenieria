import { Controller, Get, Param } from '@nestjs/common';
import { LgacProyectos2Service } from './lgacProyectos2.service';
import { LgacProyectos2 } from './lgacProyectos2.entity';

@Controller('lgac-proyectos2')
export class LgacProyectos2Controller {
  constructor(private readonly lgacProyectos2Service: LgacProyectos2Service) {}

  // GET /lgac-proyectos2
  @Get()
  findAll(): Promise<LgacProyectos2[]> {
    return this.lgacProyectos2Service.findAll();
  }

  // GET /lgac-proyectos2/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacProyectos2 | null> {
    return this.lgacProyectos2Service.findOne(id);
  }
}
