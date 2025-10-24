import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConveniosFirmadosController } from './conveniosFirmados.controller';
import { ConveniosFirmadosService } from './conveniosFirmados.service';
import { ConveniosFirmados } from './conveniosFirmados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConveniosFirmados])],
  controllers: [ConveniosFirmadosController],
  providers: [ConveniosFirmadosService],
})
export class ConveniosFirmadosModule {}
