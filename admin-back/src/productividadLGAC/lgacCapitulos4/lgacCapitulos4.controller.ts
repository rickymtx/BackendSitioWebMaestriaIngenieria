import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { LgacCapitulos4Service } from './lgacCapitulos4.service';
import { LgacCapitulos4 } from './lgacCapitulos4.entity';

@Controller('lgac-capitulos4')
export class LgacCapitulos4Controller {
  constructor(private readonly lgacCapitulos4Service: LgacCapitulos4Service) {}

  @Get()
  findAll(): Promise<LgacCapitulos4[]> {
    return this.lgacCapitulos4Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<LgacCapitulos4 | null> {
    return this.lgacCapitulos4Service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<LgacCapitulos4>): Promise<LgacCapitulos4> {
    return this.lgacCapitulos4Service.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<LgacCapitulos4>,
  ): Promise<{ updated: boolean }> {
    const updated = await this.lgacCapitulos4Service.update(id, data);
    return { updated };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    const deleted = await this.lgacCapitulos4Service.remove(id);
    return { deleted };
  }
}
