import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequisitosGrado } from './requisitosGrado.entity';
import { RequisitosGradoService } from './requisitosGrado.service';
import { RequisitosGradoController } from './requisitosGrado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RequisitosGrado])],
  controllers: [RequisitosGradoController],
  providers: [RequisitosGradoService],
})
export class RequisitosGradoModule {}
