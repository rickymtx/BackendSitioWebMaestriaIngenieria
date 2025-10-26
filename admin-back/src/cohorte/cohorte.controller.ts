import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CohorteService } from './cohorte.service';
import { Cohorte } from './cohorte.entity';

@Controller('cohorte')
export class CohorteController {
  constructor(private readonly cohorteService: CohorteService) {}

  // GET /cohorte
  @Get()
  findAll(): Promise<Cohorte[]> {
    return this.cohorteService.findAll();
  }

  // GET /cohorte/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cohorte | null> {
    return this.cohorteService.findOne(id);
  }

  // POST /cohorte
  @Post()
  create(@Body() cohorteData: Partial<Cohorte>): Promise<Cohorte> {
    return this.cohorteService.create(cohorteData);
  }

  // PUT /cohorte/:id
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() cohorteData: Partial<Cohorte>,
  ): Promise<Cohorte> {
    return this.cohorteService.update(id, cohorteData);
  }

  // ✅ DELETE /cohorte/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cohorteService.remove(id);
  }
}
