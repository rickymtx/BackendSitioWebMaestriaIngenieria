import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ParticipacionRedesService } from './participacionRedes.service';
import { ParticipacionRedes } from './participacionRedes.entity';

@Controller('participacion-redes')
export class ParticipacionRedesController {
  constructor(private readonly participacionRedesService: ParticipacionRedesService) {}

  @Get()
  findAll(): Promise<ParticipacionRedes[]> {
    return this.participacionRedesService.findAll();
  }

  @Post()
  create(@Body() data: Partial<ParticipacionRedes>): Promise<ParticipacionRedes> {
    return this.participacionRedesService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<ParticipacionRedes>
  ): Promise<ParticipacionRedes> {
    return this.participacionRedesService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.participacionRedesService.delete(id);
  }
}
