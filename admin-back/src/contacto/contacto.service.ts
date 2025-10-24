// src/contacto/contacto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacto } from './contacto.entity';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private readonly contactoRepo: Repository<Contacto>,
  ) {}

  async findAll(): Promise<Contacto[]> {
    return this.contactoRepo.find();
  }

  // opcional (más adelante) agregar findOne, create, update, delete...
}
