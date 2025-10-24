import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtrosReconocimientos } from './otrosReconocimientos.entity';
import { OtrosReconocimientosService } from './otrosReconocimientos.service';
import { OtrosReconocimientosController } from './otrosReconocimientos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OtrosReconocimientos])],
  controllers: [OtrosReconocimientosController],
  providers: [OtrosReconocimientosService],
})
export class OtrosReconocimientosModule {}
