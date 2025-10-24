import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lgyac } from './lgyac.entity';

@Injectable()
export class LgyacService {
  constructor(
    @InjectRepository(Lgyac)
    private readonly lgyacRepository: Repository<Lgyac>,
  ) {}

  async findAll(): Promise<Lgyac[]> {
    return this.lgyacRepository.find();
  }
}
