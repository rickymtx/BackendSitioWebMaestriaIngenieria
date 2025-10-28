import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitosPermanencia } from './requisitosPermanencia.entity';

@Injectable()
export class RequisitosPermanenciaService {
  constructor(
    @InjectRepository(RequisitosPermanencia)
    private readonly requisitosRepository: Repository<RequisitosPermanencia>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<RequisitosPermanencia[]> {
    return this.requisitosRepository.find();
  }

  // Crear un nuevo registro
  async create(data: Partial<RequisitosPermanencia>): Promise<RequisitosPermanencia> {
    const nuevo = this.requisitosRepository.create(data);
    return await this.requisitosRepository.save(nuevo);
  }

  // Actualizar un registro existente
  async update(id: number, data: Partial<RequisitosPermanencia>): Promise<{ updated: boolean }> {
    const resultado = await this.requisitosRepository.update({ id_requisito: id }, data);
    return { updated: (resultado.affected ?? 0) > 0 };
  }

  // Eliminar un registro
  async delete(id: number): Promise<{ deleted: boolean }> {
    const resultado = await this.requisitosRepository.delete({ id_requisito: id });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
