import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacProyectos3 } from './lgacProyectos3.entity';
import { LgacProyectos3Service } from './lgacProyectos3.service';
import { LgacProyectos3Controller } from './lgacProyectos3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacProyectos3])],
  controllers: [LgacProyectos3Controller],
  providers: [LgacProyectos3Service],
})
export class LgacProyectos3Module {}
