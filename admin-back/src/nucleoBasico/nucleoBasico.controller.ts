import { Controller, Get, Post, Body } from '@nestjs/common';
import { NucleoBasicoService } from './nucleoBasico.service';
import { NucleoBasico } from './nucleoBasico.entity';

@Controller('nucleo-basico')
export class NucleoBasicoController {
  constructor(private readonly nucleoBasicoService: NucleoBasicoService) {}

  @Get()
  async findAll(): Promise<NucleoBasico[]> {
    return this.nucleoBasicoService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<NucleoBasico>): Promise<NucleoBasico> {
    return this.nucleoBasicoService.create(data);
  }
}
