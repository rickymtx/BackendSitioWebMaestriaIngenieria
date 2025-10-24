import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequisitosPermanencia } from './requisitosPermanencia.entity';
import { RequisitosPermanenciaService } from './requisitosPermanencia.service';
import { RequisitosPermanenciaController } from './requisitosPermanencia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RequisitosPermanencia])],
  controllers: [RequisitosPermanenciaController],
  providers: [RequisitosPermanenciaService],
})
export class RequisitosPermanenciaModule {}
