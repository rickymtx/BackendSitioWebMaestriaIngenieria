import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequisitosGrado } from './requisitosGrado.entity';

@Injectable()
export class RequisitosGradoService {
  constructor(
    @InjectRepository(RequisitosGrado)
    private readonly requisitosRepository: Repository<RequisitosGrado>,
  ) { }

  // Método para obtener todos los registros
  findAll(): Promise<RequisitosGrado[]> {
    return this.requisitosRepository.find();
  }

  // Método para crear un nuevo requisito
  async create(requisitoData: RequisitosGrado): Promise<RequisitosGrado> {
    const nuevoRequisito = this.requisitosRepository.create(requisitoData);
    return this.requisitosRepository.save(nuevoRequisito);
  }

  // Método para actualizar un requisito por ID
  async update(id_grado: number, requisitoData: Partial<RequisitosGrado>): Promise<RequisitosGrado> {
    const requisito = await this.requisitosRepository.findOne({ where: { id_grado } });

    if (!requisito) {
      throw new Error(`Requisito con ID ${id_grado} no encontrado`);
    }

    Object.assign(requisito, requisitoData);
    return this.requisitosRepository.save(requisito);
  }

  // Método para eliminar un requisito por ID
  async remove(id_grado: number): Promise<{ deleted: boolean }> {
    const resultado = await this.requisitosRepository.delete(id_grado);
    return { deleted: resultado.affected !== 0 };
  }
}
