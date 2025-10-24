import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cohorte } from './cohorte.entity';
import { CohorteService } from './cohorte.service';
import { CohorteController } from './cohorte.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cohorte])],
  controllers: [CohorteController],
  providers: [CohorteService],
})
export class CohorteModule {}
