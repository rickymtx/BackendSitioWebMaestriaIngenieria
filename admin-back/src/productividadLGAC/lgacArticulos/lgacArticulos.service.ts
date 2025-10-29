import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos } from './lgacArticulos.entity';

@Injectable()
export class LgacArticulosService {
  constructor(
    @InjectRepository(LgacArticulos)
    private readonly lgacArticulosRepository: Repository<LgacArticulos>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos[]> {
    return this.lgacArticulosRepository.find();
  }

  // Obtener un registro por ID
  findOne(id: number): Promise<LgacArticulos | null> {
    return this.lgacArticulosRepository.findOneBy({ id_articulo: id });
  }

  // Crear un nuevo registro
  async create(data: Partial<LgacArticulos>): Promise<LgacArticulos> {
    const nuevo = this.lgacArticulosRepository.create(data);
    return this.lgacArticulosRepository.save(nuevo);
  }

  // Actualizar un registro existente
  async update(
    id: number,
    data: Partial<LgacArticulos>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacArticulosRepository.update(
      { id_articulo: id },
      data,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  // Eliminar un registro existente
  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacArticulosRepository.delete({ id_articulo: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
