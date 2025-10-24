import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacArticulos } from './lgacArticulos.entity';
import { LgacArticulosService } from './lgacArticulos.service';
import { LgacArticulosController } from './lgacArticulos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacArticulos])],
  controllers: [LgacArticulosController],
  providers: [LgacArticulosService],
})
export class LgacArticulosModule {}
