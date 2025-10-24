// src/asignaturasBasicas/asignaturasBasicas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignaturasBasicas } from './asignaturasBasicas.entity';

@Injectable()
export class AsignaturasBasicasService {
  constructor(
    @InjectRepository(AsignaturasBasicas)
    private readonly asignaturasRepo: Repository<AsignaturasBasicas>,
  ) {}

  async findAll(): Promise<AsignaturasBasicas[]> {
    return this.asignaturasRepo.find();
  }
}
