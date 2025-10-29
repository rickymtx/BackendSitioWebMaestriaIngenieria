import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
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

  // POST /lgac-articulos2
  @Post()
  create(@Body() nuevoArticulo: Partial<LgacArticulos2>): Promise<LgacArticulos2> {
    return this.lgacArticulos2Service.create(nuevoArticulo);
  }

  // PUT /lgac-articulos2/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() datosActualizados: Partial<LgacArticulos2>,
  ): Promise<{ updated: boolean }> {
    return this.lgacArticulos2Service.update(id, datosActualizados);
  }

  // DELETE /lgac-articulos2/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacArticulos2Service.remove(id);
  }
}
