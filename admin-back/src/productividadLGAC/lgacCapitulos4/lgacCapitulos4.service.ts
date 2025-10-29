import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos4 } from './lgacCapitulos4.entity';

@Injectable()
export class LgacCapitulos4Service {
  constructor(
    @InjectRepository(LgacCapitulos4)
    private readonly lgacCapitulos4Repository: Repository<LgacCapitulos4>,
  ) { }

  findAll(): Promise<LgacCapitulos4[]> {
    return this.lgacCapitulos4Repository.find();
  }

  findOne(id: number): Promise<LgacCapitulos4 | null> {
    return this.lgacCapitulos4Repository.findOneBy({ id_capitulo: id });
  }

  async create(data: Partial<LgacCapitulos4>): Promise<LgacCapitulos4> {
    const nuevoCapitulo = this.lgacCapitulos4Repository.create(data);
    return this.lgacCapitulos4Repository.save(nuevoCapitulo);
  }

  async update(id: number, data: Partial<LgacCapitulos4>): Promise<boolean> {
    const resultado = await this.lgacCapitulos4Repository.update(
      { id_capitulo: id },
      data,
    );

    return (resultado.affected ?? 0) > 0;
  }
D
  async remove(id: number): Promise<boolean> {
    const resultado = await this.lgacCapitulos4Repository.delete({ id_capitulo: id });
    return (resultado.affected ?? 0) > 0;
  }
}
