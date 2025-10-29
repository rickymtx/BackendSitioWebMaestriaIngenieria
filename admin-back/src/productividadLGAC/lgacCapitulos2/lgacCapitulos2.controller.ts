import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LgacCapitulos2Service } from './lgacCapitulos2.service';
import { LgacCapitulos2 } from './lgacCapitulos2.entity';

@Controller('lgac-capitulos2')
export class LgacCapitulos2Controller {
  constructor(private readonly lgacCapitulos2Service: LgacCapitulos2Service) {}

  @Get()
  findAll(): Promise<LgacCapitulos2[]> {
    return this.lgacCapitulos2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos2 | null> {
    return this.lgacCapitulos2Service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<LgacCapitulos2>): Promise<LgacCapitulos2> {
    return this.lgacCapitulos2Service.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<LgacCapitulos2>,
  ): Promise<{ updated: boolean }> {
    const updated = await this.lgacCapitulos2Service.update(id, data);
    return { updated };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    const deleted = await this.lgacCapitulos2Service.remove(id);
    return { deleted };
  }
}
