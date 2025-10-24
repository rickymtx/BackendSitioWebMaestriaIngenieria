import { Controller, Get, Param } from '@nestjs/common';
import { LgacProyectosService } from './lgacProyectos.service';
import { LgacProyectos } from './lgacProyectos.entity';

@Controller('lgac-proyectos')
export class LgacProyectosController {
  constructor(private readonly lgacProyectosService: LgacProyectosService) {}

  // GET /lgac-proyectos
  @Get()
  findAll(): Promise<LgacProyectos[]> {
    return this.lgacProyectosService.findAll();
  }

  // GET /lgac-proyectos/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacProyectos | null> {
    return this.lgacProyectosService.findOne(id);
  }
}
