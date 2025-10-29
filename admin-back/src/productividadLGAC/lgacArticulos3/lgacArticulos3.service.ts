import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacArticulos3 } from './lgacArticulos3.entity';

@Injectable()
export class LgacArticulos3Service {
  constructor(
    @InjectRepository(LgacArticulos3)
    private readonly lgacArticulos3Repository: Repository<LgacArticulos3>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<LgacArticulos3[]> {
    return this.lgacArticulos3Repository.find();
  }

  // Obtener un registro por ID
  findOne(id: number): Promise<LgacArticulos3 | null> {
    return this.lgacArticulos3Repository.findOneBy({ id_articulo: id });
  }

  // Crear un nuevo registro
  async create(data: Partial<LgacArticulos3>): Promise<LgacArticulos3> {
    const nuevo = this.lgacArticulos3Repository.create(data);
    return this.lgacArticulos3Repository.save(nuevo);
  }

  // Actualizar un registro existente
  async update(
    id: number,
    data: Partial<LgacArticulos3>,
  ): Promise<{ updated: boolean }> {
    const resultado = await this.lgacArticulos3Repository.update(
      { id_articulo: id },
      data,
    );
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  // Eliminar un registro existente
  async remove(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.lgacArticulos3Repository.delete({ id_articulo: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
