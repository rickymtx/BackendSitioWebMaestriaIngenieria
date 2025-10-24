import { Controller, Get } from '@nestjs/common';
import { LgyacService } from './lgyac.service';
import { Lgyac } from './lgyac.entity';

@Controller('lgyac')
export class LgyacController {
  constructor(private readonly lgyacService: LgyacService) {}

  @Get()
  async getAll(): Promise<Lgyac[]> {
    return this.lgyacService.findAll();
  }
}
