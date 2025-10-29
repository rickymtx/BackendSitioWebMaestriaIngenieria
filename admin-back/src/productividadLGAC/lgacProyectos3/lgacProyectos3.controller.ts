import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

  // POST /lgac-proyectos3
  @Post()
  create(@Body() nuevoProyecto: LgacProyectos3): Promise<LgacProyectos3> {
    return this.lgacProyectos3Service.create(nuevoProyecto);
  }

  // PUT /lgac-proyectos3/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() proyectoActualizado: Partial<LgacProyectos3>,
  ): Promise<{ updated: boolean }> {
    return this.lgacProyectos3Service.update(id, proyectoActualizado);
  }

  // DELETE /lgac-proyectos3/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacProyectos3Service.remove(id);
  }
}
