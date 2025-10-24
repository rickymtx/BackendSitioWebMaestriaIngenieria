import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      { name: 'Ricardo', role: 'Administrador' },
      { name: 'María', role: 'Editor' },
      { name: 'Juan', role: 'Viewer' }
    ];
  }
}
