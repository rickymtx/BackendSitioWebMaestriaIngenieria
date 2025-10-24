import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacCapitulos3 } from './lgacCapitulos3.entity';
import { LgacCapitulos3Service } from './lgacCapitulos3.service';
import { LgacCapitulos3Controller } from './lgacCapitulos3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacCapitulos3])],
  controllers: [LgacCapitulos3Controller],
  providers: [LgacCapitulos3Service],
})
export class LgacCapitulos3Module {}
