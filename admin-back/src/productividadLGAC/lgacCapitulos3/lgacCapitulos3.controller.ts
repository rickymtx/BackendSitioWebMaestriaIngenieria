import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LgacCapitulos3Service } from './lgacCapitulos3.service';
import { LgacCapitulos3 } from './lgacCapitulos3.entity';

@Controller('lgac-capitulos3')
export class LgacCapitulos3Controller {
  constructor(private readonly lgacCapitulos3Service: LgacCapitulos3Service) {}

  @Get()
  findAll(): Promise<LgacCapitulos3[]> {
    return this.lgacCapitulos3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos3 | null> {
    return this.lgacCapitulos3Service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<LgacCapitulos3>): Promise<LgacCapitulos3> {
    return this.lgacCapitulos3Service.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<LgacCapitulos3>,
  ): Promise<{ updated: boolean }> {
    const updated = await this.lgacCapitulos3Service.update(id, data);
    return { updated };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    const deleted = await this.lgacCapitulos3Service.remove(id);
    return { deleted };
  }
}
