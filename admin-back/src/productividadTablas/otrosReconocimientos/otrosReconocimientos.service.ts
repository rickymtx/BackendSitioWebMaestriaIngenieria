import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OtrosReconocimientos } from './otrosReconocimientos.entity';

@Injectable()
export class OtrosReconocimientosService {
  constructor(
    @InjectRepository(OtrosReconocimientos)
    private otrosReconocimientosRepository: Repository<OtrosReconocimientos>,
  ) {}

  findAll(): Promise<OtrosReconocimientos[]> {
    return this.otrosReconocimientosRepository.find();
  }

  create(data: Partial<OtrosReconocimientos>): Promise<OtrosReconocimientos> {
    const nuevo = this.otrosReconocimientosRepository.create(data);
    return this.otrosReconocimientosRepository.save(nuevo);
  }

  async update(id: number, data: Partial<OtrosReconocimientos>): Promise<OtrosReconocimientos> {
    await this.otrosReconocimientosRepository.update(id, data);

    const actualizado = await this.otrosReconocimientosRepository.findOneBy({ id_reconocimientos: id });

    if (!actualizado) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }

    return actualizado;
  }

  async remove(id: number): Promise<{ message: string }> {
    const resultado = await this.otrosReconocimientosRepository.delete(id);

    if (resultado.affected === 0) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }

    return { message: `Registro con id ${id} eliminado correctamente` };
  }
}
