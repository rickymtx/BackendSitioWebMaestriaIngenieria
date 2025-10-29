import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

  // POST /lgac-proyectos
  @Post()
  create(@Body() nuevoProyecto: LgacProyectos): Promise<LgacProyectos> {
    return this.lgacProyectosService.create(nuevoProyecto);
  }

  // PUT /lgac-proyectos/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() proyectoActualizado: Partial<LgacProyectos>,
  ): Promise<{ updated: boolean }> {
    return this.lgacProyectosService.update(id, proyectoActualizado);
  }

  // DELETE /lgac-proyectos/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacProyectosService.remove(id);
  }
}
