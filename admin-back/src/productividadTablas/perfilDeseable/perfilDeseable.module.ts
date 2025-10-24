import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilDeseable } from './perfilDeseable.entity';
import { PerfilDeseableService } from './perfilDeseable.service';
import { PerfilDeseableController } from './perfilDeseable.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilDeseable])],
  controllers: [PerfilDeseableController],
  providers: [PerfilDeseableService],
})
export class PerfilDeseableModule {}
