import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SistemaNacional } from './sistemaNacional.entity';

@Injectable()
export class SistemaNacionalService {
  constructor(
    @InjectRepository(SistemaNacional)
    private sistemaNacionalRepository: Repository<SistemaNacional>,
  ) {}

  // Método GET: obtener todos los registros
  findAll(): Promise<SistemaNacional[]> {
    return this.sistemaNacionalRepository.find();
  }

  // Método PUT: actualizar registro por ID
  async update(id: number, datosActualizados: Partial<SistemaNacional>): Promise<SistemaNacional> {
    const sistema = await this.sistemaNacionalRepository.findOne({ where: { id_sistema: id } });

    if (!sistema) {
      throw new Error(`El registro con ID ${id} no existe`);
    }

    Object.assign(sistema, datosActualizados);
    return this.sistemaNacionalRepository.save(sistema);
  }
}
