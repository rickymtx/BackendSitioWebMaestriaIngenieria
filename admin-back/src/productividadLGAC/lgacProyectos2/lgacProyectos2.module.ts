import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacProyectos2 } from './lgacProyectos2.entity';
import { LgacProyectos2Service } from './lgacProyectos2.service';
import { LgacProyectos2Controller } from './lgacProyectos2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacProyectos2])],
  controllers: [LgacProyectos2Controller],
  providers: [LgacProyectos2Service],
})
export class LgacProyectos2Module {}
