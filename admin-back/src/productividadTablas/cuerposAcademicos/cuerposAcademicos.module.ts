import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuerpoAcademico } from './cuerposAcademicos.entity';
import { IntegranteCuerpo } from './integrantesCuerpo.entity';
import { CuerposAcademicosService } from './cuerposAcademicos.service';
import { CuerposAcademicosController } from './cuerposAcademicos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CuerpoAcademico, IntegranteCuerpo])],
  controllers: [CuerposAcademicosController],
  providers: [CuerposAcademicosService],
})
export class CuerposAcademicosModule {}
