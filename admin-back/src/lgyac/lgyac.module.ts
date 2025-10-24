import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgyacController } from './lgyac.controller';
import { LgyacService } from './lgyac.service';
import { Lgyac } from './lgyac.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lgyac])],
  controllers: [LgyacController],
  providers: [LgyacService],
})
export class LgyacModule {}
