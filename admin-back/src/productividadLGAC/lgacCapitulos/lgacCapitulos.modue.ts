import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgacCapitulos } from './lgacCapitulos.entity';
import { LgacCapitulosService } from './lgacCapitulos.service';
import { LgacCapitulosController } from './lgacCapitulos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LgacCapitulos])],
  controllers: [LgacCapitulosController],
  providers: [LgacCapitulosService],
})
export class LgacCapitulosModule {}
