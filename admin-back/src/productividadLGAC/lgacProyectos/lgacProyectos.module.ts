import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacProyectos } from './lgacProyectos.entity';
import { LgacProyectosService } from './lgacProyectos.service';
import { LgacProyectosController } from './lgacProyectos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacProyectos])],
  controllers: [LgacProyectosController],
  providers: [LgacProyectosService],
})
export class LgacProyectosModule {}
