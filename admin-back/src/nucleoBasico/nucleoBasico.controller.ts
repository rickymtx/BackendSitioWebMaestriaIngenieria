import { Controller, Get } from '@nestjs/common';
import { NucleoBasicoService } from './nucleoBasico.service';
import { NucleoBasico } from './nucleoBasico.entity';

@Controller('nucleo-basico')
export class NucleoBasicoController {
  constructor(private readonly nucleoBasicoService: NucleoBasicoService) {}

  @Get()
  async getAll(): Promise<NucleoBasico[]> {
    return this.nucleoBasicoService.findAll();
  }
}
