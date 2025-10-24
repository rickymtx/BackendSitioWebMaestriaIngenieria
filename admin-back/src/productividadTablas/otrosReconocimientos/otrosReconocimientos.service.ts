import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OtrosReconocimientos } from './otrosReconocimientos.entity';

@Injectable()
export class OtrosReconocimientosService {
  constructor(
    @InjectRepository(OtrosReconocimientos)
    private otrosReconocimientosRepository: Repository<OtrosReconocimientos>,
  ) {}

  // Método para obtener todos los registros
  findAll(): Promise<OtrosReconocimientos[]> {
    return this.otrosReconocimientosRepository.find();
  }
}
