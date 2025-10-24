import { Controller, Get, Param } from '@nestjs/common';
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
}
