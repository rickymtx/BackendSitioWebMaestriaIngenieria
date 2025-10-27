import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OtrosReconocimientosService } from './otrosReconocimientos.service';
import { OtrosReconocimientos } from './otrosReconocimientos.entity';

@Controller('otros-reconocimientos')
export class OtrosReconocimientosController {
  constructor(private readonly otrosReconocimientosService: OtrosReconocimientosService) {}

  @Get()
  findAll(): Promise<OtrosReconocimientos[]> {
    return this.otrosReconocimientosService.findAll();
  }

  @Post()
  create(@Body() body: { profesor: string; tipoRec: string }): Promise<OtrosReconocimientos> {
    return this.otrosReconocimientosService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { profesor?: string; tipoRec?: string },
  ): Promise<OtrosReconocimientos> {
    return this.otrosReconocimientosService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.otrosReconocimientosService.remove(Number(id));
  }
}
