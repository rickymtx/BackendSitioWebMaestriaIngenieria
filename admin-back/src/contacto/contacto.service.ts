import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacto } from './contacto.entity';
import { CreateContactoDto } from './dto/create-contacto.dto';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private readonly contactoRepo: Repository<Contacto>,
  ) { }

  async findAll(): Promise<Contacto[]> {
    return this.contactoRepo.find();
  }

  // POST / CREATE
  async create(createContactoDto: CreateContactoDto): Promise<Contacto> {
    const contacto = this.contactoRepo.create(createContactoDto);
    return this.contactoRepo.save(contacto);
  }

  // PUT / UPDATE
  async update(id: number, updateContactoDto: CreateContactoDto): Promise<Contacto> {
    const contacto = await this.contactoRepo.findOneBy({ id_contacto: id });
    if (!contacto) {
      throw new Error('Contacto no encontrado');
    }

    Object.assign(contacto, updateContactoDto);
    return this.contactoRepo.save(contacto);
  }

  // DELETE / REMOVE
  async remove(id: number): Promise<void> {
    const contacto = await this.contactoRepo.findOneBy({ id_contacto: id });
    if (!contacto) {
      throw new Error('Contacto no encontrado');
    }
    await this.contactoRepo.remove(contacto);
  }
}
