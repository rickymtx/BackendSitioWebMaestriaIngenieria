import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lgyac } from './lgyac.entity';

@Injectable()
export class LgyacService {
  constructor(
    @InjectRepository(Lgyac)
    private readonly lgyacRepository: Repository<Lgyac>,
  ) {}

  async findAll(): Promise<Lgyac[]> {
    return this.lgyacRepository.find();
  }

  async create(lgyacData: Lgyac): Promise<Lgyac> {
    const newLgyac = this.lgyacRepository.create(lgyacData);
    return this.lgyacRepository.save(newLgyac);
  }

  async update(id: number, lgyacData: Partial<Lgyac>): Promise<Lgyac> {
    await this.lgyacRepository.update(id, lgyacData);

    const updated = await this.lgyacRepository.findOne({
      where: { id_lgyac: id },
    });

    if (!updated) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }

    return updated;
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.lgyacRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }

    return { message: `Registro con id ${id} eliminado correctamente` };
  }
}
