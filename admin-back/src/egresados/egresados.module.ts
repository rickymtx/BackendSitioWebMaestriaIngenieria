import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Egresados } from './egresados.entity';
import { EgresadosController } from './egresados.controller';
import { EgresadosService } from './egresados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Egresados])],
  controllers: [EgresadosController],
  providers: [EgresadosService],
})
export class EgresadosModule {}
