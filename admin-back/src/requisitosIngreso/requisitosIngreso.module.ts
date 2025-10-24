import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequisitosIngreso } from './requisitosIngreso.entity';
import { RequisitosIngresoService } from './requisitosIngreso.service';
import { RequisitosIngresoController } from './requisitosIngreso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RequisitosIngreso])],
  controllers: [RequisitosIngresoController],
  providers: [RequisitosIngresoService],
})
export class RequisitosIngresoModule {}
