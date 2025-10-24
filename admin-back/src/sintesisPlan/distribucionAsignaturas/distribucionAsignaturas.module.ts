import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistribucionAsignaturasController } from './distribucionAsignaturas.controller';
import { DistribucionAsignaturasService } from './distribucionAsignaturas.service';
import { DistribucionAsignaturas } from './distribucionAsignaturas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistribucionAsignaturas])],
  controllers: [DistribucionAsignaturasController],
  providers: [DistribucionAsignaturasService],
})
export class DistribucionAsignaturasModule {}
