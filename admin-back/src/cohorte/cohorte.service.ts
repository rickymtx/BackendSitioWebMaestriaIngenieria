import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cohorte } from './cohorte.entity';

@Injectable()
export class CohorteService {
  constructor(
    @InjectRepository(Cohorte)
    private readonly cohorteRepository: Repository<Cohorte>,
  ) { }

  // Obtener todos los registros
  findAll(): Promise<Cohorte[]> {
    return this.cohorteRepository.find();
  }

  // Obtener un registro por ID
  findOne(id: number): Promise<Cohorte | null> {
    return this.cohorteRepository.findOneBy({ id_cohorte: id });
  }

  // Crear un nuevo registro
  async create(cohorteData: Partial<Cohorte>): Promise<Cohorte> {
    const cohorte = this.cohorteRepository.create(cohorteData);
    return this.cohorteRepository.save(cohorte);
  }

  // Actualizar un registro por ID
  async update(id: number, cohorteData: Partial<Cohorte>): Promise<Cohorte> {
    const cohorte = await this.cohorteRepository.findOneBy({ id_cohorte: id });

    if (!cohorte) {
      throw new Error(`No se encontró la cohorte con id ${id}`);
    }

    Object.assign(cohorte, cohorteData);
    return this.cohorteRepository.save(cohorte);
  }

  // Eliminar un registro por ID
  async remove(id: number): Promise<void> {
    const cohorte = await this.cohorteRepository.findOneBy({ id_cohorte: id });

    if (!cohorte) {
      throw new Error(`No se encontró la cohorte con id ${id}`);
    }

    await this.cohorteRepository.remove(cohorte);
  }
}
