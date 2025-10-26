import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LgyacService } from './lgyac.service';
import { Lgyac } from './lgyac.entity';

@Controller('lgyac')
export class LgyacController {
  constructor(private readonly lgyacService: LgyacService) {}

  @Get()
  async getAll(): Promise<Lgyac[]> {
    return this.lgyacService.findAll();
  }

  @Post()
  async create(@Body() lgyacData: Lgyac): Promise<Lgyac> {
    return this.lgyacService.create(lgyacData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() lgyacData: Partial<Lgyac>,
  ): Promise<Lgyac> {
    return this.lgyacService.update(id, lgyacData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    return this.lgyacService.remove(id);
  }
}
