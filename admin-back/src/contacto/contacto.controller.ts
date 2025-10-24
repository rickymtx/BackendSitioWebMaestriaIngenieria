// src/contacto/contacto.controller.ts
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { Contacto } from './contacto.entity';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Get()
  async getAll(): Promise<Contacto[]> {
    try {
      return await this.contactoService.findAll();
    } catch (error) {
      // loguea error si quieres
      throw new HttpException(
        'Error al obtener contactos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
