// src/asignaturasBasicas/asignaturasBasicas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturasBasicas } from './asignaturasBasicas.entity';
import { AsignaturasBasicasService } from './asignaturasBasicas.service';
import { AsignaturasBasicasController } from './asignaturasBasicas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AsignaturasBasicas])],
  providers: [AsignaturasBasicasService],
  controllers: [AsignaturasBasicasController],
  exports: [AsignaturasBasicasService],
})
export class AsignaturasBasicasModule {}
