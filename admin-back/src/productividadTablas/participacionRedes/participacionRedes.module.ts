import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipacionRedes } from './participacionRedes.entity';
import { ParticipacionRedesService } from './participacionRedes.service';
import { ParticipacionRedesController } from './participacionRedes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ParticipacionRedes])],
  controllers: [ParticipacionRedesController],
  providers: [ParticipacionRedesService],
})
export class ParticipacionRedesModule {}
