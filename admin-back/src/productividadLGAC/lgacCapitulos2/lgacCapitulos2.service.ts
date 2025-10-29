import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos2 } from './lgacCapitulos2.entity';

@Injectable()
export class LgacCapitulos2Service {
  constructor(
    @InjectRepository(LgacCapitulos2)
    private readonly lgacCapitulos2Repository: Repository<LgacCapitulos2>,
  ) { }

  findAll(): Promise<LgacCapitulos2[]> {
    return this.lgacCapitulos2Repository.find();
  }

  findOne(id: number): Promise<LgacCapitulos2 | null> {
    return this.lgacCapitulos2Repository.findOneBy({ id_capitulo: id });
  }

  async create(data: Partial<LgacCapitulos2>): Promise<LgacCapitulos2> {
    const nuevoCapitulo = this.lgacCapitulos2Repository.create(data);
    return this.lgacCapitulos2Repository.save(nuevoCapitulo);
  }

  async update(id: number, data: Partial<LgacCapitulos2>): Promise<boolean> {
    const resultado = await this.lgacCapitulos2Repository.update(
      { id_capitulo: id },
      data,
    );

    return (resultado.affected ?? 0) > 0;
  }
D
  async remove(id: number): Promise<boolean> {
    const resultado = await this.lgacCapitulos2Repository.delete({ id_capitulo: id });
    return (resultado.affected ?? 0) > 0;
  }
}
