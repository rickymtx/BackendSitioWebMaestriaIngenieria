import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podcast } from './podcast.entity';
import { PodcastService } from './podcast.service';
import { PodcastController } from './podcast.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Podcast])],
  controllers: [PodcastController],
  providers: [PodcastService],
})
export class PodcastModule {}
