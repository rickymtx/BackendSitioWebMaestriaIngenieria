import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LgacArticulosService } from './lgacArticulos.service';
import { LgacArticulos } from './lgacArticulos.entity';

@Controller('lgac-articulos')
export class LgacArticulosController {
  constructor(private readonly lgacArticulosService: LgacArticulosService) {}

  // GET /lgac-articulos
  @Get()
  findAll(): Promise<LgacArticulos[]> {
    return this.lgacArticulosService.findAll();
  }

  // GET /lgac-articulos/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacArticulos | null> {
    return this.lgacArticulosService.findOne(id);
  }

  // POST /lgac-articulos
  @Post()
  create(@Body() nuevoArticulo: Partial<LgacArticulos>): Promise<LgacArticulos> {
    return this.lgacArticulosService.create(nuevoArticulo);
  }

  // PUT /lgac-articulos/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() datosActualizados: Partial<LgacArticulos>,
  ): Promise<{ updated: boolean }> {
    return this.lgacArticulosService.update(id, datosActualizados);
  }

  // DELETE /lgac-articulos/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.lgacArticulosService.remove(id);
  }
}
