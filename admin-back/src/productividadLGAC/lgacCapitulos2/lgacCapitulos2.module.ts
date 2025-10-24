import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacCapitulos2 } from './lgacCapitulos2.entity';
import { LgacCapitulos2Service } from './lgacCapitulos2.service';
import { LgacCapitulos2Controller } from './lgacCapitulos2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacCapitulos2])],
  controllers: [LgacCapitulos2Controller],
  providers: [LgacCapitulos2Service],
})
export class LgacCapitulos2Module {}
