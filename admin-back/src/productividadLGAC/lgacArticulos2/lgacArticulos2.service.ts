import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos2 } from './lgacArticulos2.entity';

@Injectable()
export class LgacArticulos2Service {
  constructor(
    @InjectRepository(LgacArticulos2)
    private readonly lgacArticulos2Repository: Repository<LgacArticulos2>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos2[]> {
    return this.lgacArticulos2Repository.find();
  }

  // Obtener un registro por ID
  findOne(id: number): Promise<LgacArticulos2 | null> {
    return this.lgacArticulos2Repository.findOneBy({ id_articulo: id });
  }

  // Crear un nuevo registro
  async create(data: Partial<LgacArticulos2>): Promise<LgacArticulos2> {
    const nuevo = this.lgacArticulos2Repository.create(data);
    return this.lgacArticulos2Repository.save(nuevo);
  }

  // Actualizar un registro existente
  async update(
    id: number,
    data: Partial<LgacArticulos2>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacArticulos2Repository.update(
      { id_articulo: id },
      data,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  // Eliminar un registro existente
  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacArticulos2Repository.delete({ id_articulo: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
