import { Controller, Get } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { Podcast } from './podcast.entity';

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Get()
  findAll(): Promise<Podcast[]> {
    return this.podcastService.findAll();
  }
}
