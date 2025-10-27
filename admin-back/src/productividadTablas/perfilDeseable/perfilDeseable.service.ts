import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerfilDeseable } from './perfilDeseable.entity';

@Injectable()
export class PerfilDeseableService {
  constructor(
    @InjectRepository(PerfilDeseable)
    private perfilDeseableRepository: Repository<PerfilDeseable>,
  ) { }

  findAll(): Promise<PerfilDeseable[]> {
    return this.perfilDeseableRepository.find();
  }

  async update(id: number, datosActualizados: Partial<PerfilDeseable>): Promise<PerfilDeseable> {
    const perfil = await this.perfilDeseableRepository.findOneBy({ id_perfil: id });
    if (!perfil) {
      throw new NotFoundException(`PerfilDeseable con id ${id} no encontrado`);
    }
    Object.assign(perfil, datosActualizados);
    return this.perfilDeseableRepository.save(perfil);
  }
}
