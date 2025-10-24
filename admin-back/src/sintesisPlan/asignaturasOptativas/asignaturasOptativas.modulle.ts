// src/asignaturasBasicas/asignaturasBasicas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturasOptativas } from './asignaturasOptativas.entity';
import { AsignaturasOptativasService } from './asignaturasOptativas.service';
import { asignaturasOptativasController } from './asignaturasOptativas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AsignaturasOptativas])],
  providers: [AsignaturasOptativasService],
  controllers: [asignaturasOptativasController],
  exports: [AsignaturasOptativasService],
})
export class AsignaturasOptativasModule {}
