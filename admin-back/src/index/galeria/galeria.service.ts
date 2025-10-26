import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galeria } from './galeria.entity';

@Injectable()
export class GaleriaService {
  constructor(
    @InjectRepository(Galeria)
    private readonly galeriaRepository: Repository<Galeria>,
  ) { }

  findAll(): Promise<Galeria[]> {
    return this.galeriaRepository.find();
  }

  findOne(id: number): Promise<Galeria | null> {
    return this.galeriaRepository.findOneBy({ id_galeria: id });
  }

  // POST
  create(data: Partial<Galeria>): Promise<Galeria> {
    const nuevaGaleria = this.galeriaRepository.create(data);
    return this.galeriaRepository.save(nuevaGaleria);
  }

  // PUT
  async update(id: number, data: Partial<Galeria>): Promise<Galeria | null> {
    const galeriaExistente = await this.galeriaRepository.findOneBy({ id_galeria: id });
    if (!galeriaExistente) {
      return null;
    }
    const galeriaActualizada = this.galeriaRepository.merge(galeriaExistente, data);
    return this.galeriaRepository.save(galeriaActualizada);
  }

  // DELETE
  async remove(id: number): Promise<boolean> {
    const resultado = await this.galeriaRepository.delete(id);
    return (resultado.affected ?? 0) > 0;
  }
}
