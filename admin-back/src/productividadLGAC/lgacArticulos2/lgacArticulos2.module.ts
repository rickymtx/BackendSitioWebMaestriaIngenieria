import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacArticulos2 } from './lgacArticulos2.entity';
import { LgacArticulos2Service } from './lgacArticulos2.service';
import { LgacArticulos2Controller } from './lgacArticulos2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacArticulos2])],
  controllers: [LgacArticulos2Controller],
  providers: [LgacArticulos2Service],
})
export class LgacArticulos2Module {}
