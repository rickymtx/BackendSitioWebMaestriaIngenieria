import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitosIngreso, CategoriaTipo } from './requisitosIngreso.entity';

@Injectable()
export class RequisitosIngresoService {
  constructor(
    @InjectRepository(RequisitosIngreso)
    private readonly requisitosRepository: Repository<RequisitosIngreso>,
  ) {}

  // Obtener todos los registros
  findAll(): Promise<RequisitosIngreso[]> {
    return this.requisitosRepository.find();
  }

  // Obtener por categoría específica
  findByCategoria(categoria: CategoriaTipo): Promise<RequisitosIngreso[]> {
    return this.requisitosRepository.find({ where: { categoria } });
  }

  // Crear un nuevo registro
  async create(data: { categoria: CategoriaTipo; descripcion: string }): Promise<RequisitosIngreso> {
    const nuevoRequisito = this.requisitosRepository.create(data);
    return this.requisitosRepository.save(nuevoRequisito);
  }

  // Actualizar un registro existente
  async update(
    id_requisito: number,
    data: { categoria?: CategoriaTipo; descripcion?: string },
  ): Promise<{ updated: boolean }> {
    const resultado = await this.requisitosRepository.update(
      { id_requisito },
      data,
    );

    return { updated: (resultado.affected ?? 0) > 0 };
  }

  // Eliminar un registro existente
  async delete(id_requisito: number): Promise<{ deleted: boolean }> {
    const resultado = await this.requisitosRepository.delete({ id_requisito });
    return { deleted: (resultado.affected ?? 0) > 0 };
  }
}
