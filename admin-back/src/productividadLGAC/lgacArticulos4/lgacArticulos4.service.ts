import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos4 } from './lgacArticulos4.entity';

@Injectable()
export class LgacArticulos4Service {
  constructor(
    @InjectRepository(LgacArticulos4)
    private readonly lgacArticulos4Repository: Repository<LgacArticulos4>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos4[]> {
    return this.lgacArticulos4Repository.find();
  }

  // Obtener un registro por ID
  findOne(id: number): Promise<LgacArticulos4 | null> {
    return this.lgacArticulos4Repository.findOneBy({ id_articulo: id });
  }

  // Crear un nuevo registro
  async create(data: Partial<LgacArticulos4>): Promise<LgacArticulos4> {
    const nuevo = this.lgacArticulos4Repository.create(data);
    return this.lgacArticulos4Repository.save(nuevo);
  }

  // Actualizar un registro existente
  async update(
    id: number,
    data: Partial<LgacArticulos4>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacArticulos4Repository.update(
      { id_articulo: id },
      data,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  // Eliminar un registro existente
  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacArticulos4Repository.delete({ id_articulo: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
