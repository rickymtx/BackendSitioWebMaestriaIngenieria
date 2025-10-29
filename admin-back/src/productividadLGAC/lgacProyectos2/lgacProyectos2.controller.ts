import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

  // POST /lgac-proyectos2
  @Post()
  create(@Body() nuevoProyecto: LgacProyectos2): Promise<LgacProyectos2> {
    return this.lgacProyectos2Service.create(nuevoProyecto);
  }

  // PUT /lgac-proyectos2/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() proyectoActualizado: Partial<LgacProyectos2>,
  ): Promise<{ updated: boolean }> {
    return this.lgacProyectos2Service.update(id, proyectoActualizado);
  }

  // DELETE /lgac-proyectos2/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacProyectos2Service.remove(id);
  }
}
