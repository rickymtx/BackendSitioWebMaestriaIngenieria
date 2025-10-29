import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos3 } from './lgacCapitulos3.entity';

@Injectable()
export class LgacCapitulos3Service {
  constructor(
    @InjectRepository(LgacCapitulos3)
    private readonly lgacCapitulos3Repository: Repository<LgacCapitulos3>,
  ) { }

  findAll(): Promise<LgacCapitulos3[]> {
    return this.lgacCapitulos3Repository.find();
  }

  findOne(id: number): Promise<LgacCapitulos3 | null> {
    return this.lgacCapitulos3Repository.findOneBy({ id_capitulo: id });
  }

  async create(data: Partial<LgacCapitulos3>): Promise<LgacCapitulos3> {
    const nuevoCapitulo = this.lgacCapitulos3Repository.create(data);
    return this.lgacCapitulos3Repository.save(nuevoCapitulo);
  }

  async update(id: number, data: Partial<LgacCapitulos3>): Promise<boolean> {
    const resultado = await this.lgacCapitulos3Repository.update(
      { id_capitulo: id },
      data,
    );

    return (resultado.affected ?? 0) > 0;
  }
D
  async remove(id: number): Promise<boolean> {
    const resultado = await this.lgacCapitulos3Repository.delete({ id_capitulo: id });
    return (resultado.affected ?? 0) > 0;
  }
}
