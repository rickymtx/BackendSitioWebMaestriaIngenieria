import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NucleoBasico } from './nucleoBasico.entity';
import { NucleoBasicoCvu } from './nucleoBasicoCvu.entity';
import { NucleoBasicoService } from './nucleoBasico.service';
import { NucleoBasicoController } from './nucleoBasico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NucleoBasico, NucleoBasicoCvu])],
  controllers: [NucleoBasicoController],
  providers: [NucleoBasicoService],
})
export class NucleoBasicoModule {}
