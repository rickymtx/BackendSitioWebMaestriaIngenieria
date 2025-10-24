import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portada } from './portada.entity';
import { PortadaService } from './portada.service';
import { PortadaController } from './portada.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Portada])],
  controllers: [PortadaController],
  providers: [PortadaService],
})
export class PortadaModule {}
