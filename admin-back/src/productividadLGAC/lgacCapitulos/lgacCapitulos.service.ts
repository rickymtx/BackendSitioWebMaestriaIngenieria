import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LgacCapitulos } from './lgacCapitulos.entity';

@Injectable()
export class LgacCapitulosService {
  constructor(
    @InjectRepository(LgacCapitulos)
    private readonly lgacCapitulosRepository: Repository<LgacCapitulos>,
  ) { }

  findAll(): Promise<LgacCapitulos[]> {
    return this.lgacCapitulosRepository.find();
  }

  findOne(id: number): Promise<LgacCapitulos | null> {
    return this.lgacCapitulosRepository.findOneBy({ id_capitulo: id });
  }

  async create(data: Partial<LgacCapitulos>): Promise<LgacCapitulos> {
    const nuevoCapitulo = this.lgacCapitulosRepository.create(data);
    return this.lgacCapitulosRepository.save(nuevoCapitulo);
  }

  async update(id: number, data: Partial<LgacCapitulos>): Promise<boolean> {
    const resultado = await this.lgacCapitulosRepository.update(
      { id_capitulo: id },
      data,
    );

    return (resultado.affected ?? 0) > 0;
  }
D
  async remove(id: number): Promise<boolean> {
    const resultado = await this.lgacCapitulosRepository.delete({ id_capitulo: id });
    return (resultado.affected ?? 0) > 0;
  }
}
