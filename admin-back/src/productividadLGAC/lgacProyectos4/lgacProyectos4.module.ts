import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacProyectos4 } from './lgacProyectos4.entity';
import { LgacProyectos4Service } from './lgacProyectos4.service';
import { LgacProyectos4Controller } from './lgacProyectos4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacProyectos4])],
  controllers: [LgacProyectos4Controller],
  providers: [LgacProyectos4Service],
})
export class LgacProyectos4Module {}
