import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacArticulos3 } from './lgacArticulos3.entity';
import { LgacArticulos3Service } from './lgacArticulos3.service';
import { LgacArticulos3Controller } from './lgacArticulos3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacArticulos3])],
  controllers: [LgacArticulos3Controller],
  providers: [LgacArticulos3Service],
})
export class LgacArticulos3Module {}
