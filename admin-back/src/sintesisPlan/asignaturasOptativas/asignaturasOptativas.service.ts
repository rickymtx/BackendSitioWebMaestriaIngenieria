import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignaturasOptativas as AsignaturasOptativas } from './asignaturasOptativas.entity';

@Injectable()
export class AsignaturasOptativasService {
  constructor(
    @InjectRepository(AsignaturasOptativas)
    private readonly asignaturasRepo: Repository<AsignaturasOptativas>,
  ) {}

  async findAll(): Promise<AsignaturasOptativas[]> {
    return this.asignaturasRepo.find();
  }
}
