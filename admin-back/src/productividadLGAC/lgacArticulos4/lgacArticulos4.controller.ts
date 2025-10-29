import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LgacArticulos4Service } from './lgacArticulos4.service';
import { LgacArticulos4 } from './lgacArticulos4.entity';

@Controller('lgac-articulos4')
export class LgacArticulos4Controller {
  constructor(private readonly lgacArticulos4Service: LgacArticulos4Service) {}

  // GET /lgac-articulos4
  @Get()
  findAll(): Promise<LgacArticulos4[]> {
    return this.lgacArticulos4Service.findAll();
  }

  // GET /lgac-articulos4/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacArticulos4 | null> {
    return this.lgacArticulos4Service.findOne(id);
  }

  // POST /lgac-articulos4
  @Post()
  create(@Body() nuevoArticulo: Partial<LgacArticulos4>): Promise<LgacArticulos4> {
    return this.lgacArticulos4Service.create(nuevoArticulo);
  }

  // PUT /lgac-articulos4/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() datosActualizados: Partial<LgacArticulos4>,
  ): Promise<{ updated: boolean }> {
    return this.lgacArticulos4Service.update(id, datosActualizados);
  }

  // DELETE /lgac-articulos4/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacArticulos4Service.remove(id);
  }
}
