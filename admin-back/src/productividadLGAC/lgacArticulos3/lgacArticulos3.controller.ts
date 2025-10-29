import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
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

  // POST /lgac-articulos3
  @Post()
  create(@Body() nuevoArticulo: Partial<LgacArticulos3>): Promise<LgacArticulos3> {
    return this.lgacArticulos3Service.create(nuevoArticulo);
  }

  // PUT /lgac-articulos3/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() datosActualizados: Partial<LgacArticulos3>,
  ): Promise<{ updated: boolean }> {
    return this.lgacArticulos3Service.update(id, datosActualizados);
  }

  // DELETE /lgac-articulos3/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacArticulos3Service.remove(id);
  }
}
