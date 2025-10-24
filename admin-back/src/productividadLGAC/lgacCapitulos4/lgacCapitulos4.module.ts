import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacCapitulos4 } from './lgacCapitulos4.entity';
import { LgacCapitulos4Service } from './lgacCapitulos4.service';
import { LgacCapitulos4Controller } from './lgacCapitulos4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacCapitulos4])],
  controllers: [LgacCapitulos4Controller],
  providers: [LgacCapitulos4Service],
})
export class LgacCapitulos4Module {}
