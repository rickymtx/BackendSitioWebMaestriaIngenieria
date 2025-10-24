import { Controller, Get } from '@nestjs/common';
import { ConveniosFirmadosService } from './conveniosFirmados.service';
import { ConveniosFirmados } from './conveniosFirmados.entity';

@Controller('convenios-firmados')
export class ConveniosFirmadosController {
  constructor(private readonly conveniosFirmadosService: ConveniosFirmadosService) {}

  @Get()
  async getAll(): Promise<ConveniosFirmados[]> {
    return this.conveniosFirmadosService.findAll();
  }
}
