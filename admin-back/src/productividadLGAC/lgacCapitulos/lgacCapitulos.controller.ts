import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LgacCapitulosService } from './lgacCapitulos.service';
import { LgacCapitulos } from './lgacCapitulos.entity';

@Controller('lgac-capitulos')
export class LgacCapitulosController {
  constructor(private readonly lgacCapitulosService: LgacCapitulosService) {}

  @Get()
  findAll(): Promise<LgacCapitulos[]> {
    return this.lgacCapitulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos | null> {
    return this.lgacCapitulosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<LgacCapitulos>): Promise<LgacCapitulos> {
    return this.lgacCapitulosService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<LgacCapitulos>,
  ): Promise<{ updated: boolean }> {
    const updated = await this.lgacCapitulosService.update(id, data);
    return { updated };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    const deleted = await this.lgacCapitulosService.remove(id);
    return { deleted };
  }
}
