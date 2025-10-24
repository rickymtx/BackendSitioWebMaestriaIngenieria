import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaNacional } from './sistemaNacional.entity';
import { SistemaNacionalService } from './sistemaNacional.service';
import { SistemaNacionalController } from './sistemaNacional.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SistemaNacional])],
  controllers: [SistemaNacionalController],
  providers: [SistemaNacionalService],
})
export class SistemaNacionalModule {}
