import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { Contacto } from './contacto.entity';
import { CreateContactoDto } from './dto/create-contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  // Endpoint GET
  @Get()
  async getAll(): Promise<Contacto[]> {
    try {
      return await this.contactoService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener contactos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Endpoint POST
  @Post()
  async create(@Body() createContactoDto: CreateContactoDto): Promise<Contacto> {
    try {
      return await this.contactoService.create(createContactoDto);
    } catch (error) {
      throw new HttpException(
        'Error al crear contacto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Endpoint PUT
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateContactoDto: CreateContactoDto,
  ): Promise<Contacto> {
    try {
      return await this.contactoService.update(id, updateContactoDto);
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al actualizar contacto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Endpoint DELETE
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.contactoService.remove(id);
      return { message: `Contacto con id ${id} eliminado correctamente` };
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al eliminar contacto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
