import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrientacionProfesionalController } from './orientacionProfesional.controller';
import { OrientacionProfesionalService } from './orientacionProfesional.service';
import { OrientacionProfesional } from './orientacionProfesional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrientacionProfesional])],
  controllers: [OrientacionProfesionalController],
  providers: [OrientacionProfesionalService],
})
export class OrientacionProfesionalModule {}
