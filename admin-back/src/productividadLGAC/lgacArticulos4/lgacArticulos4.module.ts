import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacArticulos4 } from './lgacArticulos4.entity';
import { LgacArticulos4Service } from './lgacArticulos4.service';
import { LgacArticulos4Controller } from './lgacArticulos4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacArticulos4])],
  controllers: [LgacArticulos4Controller],
  providers: [LgacArticulos4Service],
})
export class LgacArticulos4Module {}
