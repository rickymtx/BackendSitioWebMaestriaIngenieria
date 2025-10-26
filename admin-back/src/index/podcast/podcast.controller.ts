import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { Podcast } from './podcast.entity';

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  // Endpoint para obtener todos los podcasts
  @Get()
  findAll(): Promise<Podcast[]> {
    return this.podcastService.findAll();
  }

  // Endpoint para crear un nuevo podcast
  @Post()
  create(@Body() podcast: Partial<Podcast>): Promise<Podcast> {
    return this.podcastService.create(podcast);
  }

  // Endpoint para actualizar un podcast por su ID
  @Put(':id')
  update(@Param('id') id: string, @Body() podcast: Partial<Podcast>): Promise<Podcast> {
    return this.podcastService.update(Number(id), podcast);
  }

  // Endpoint para eliminar un podcast por su ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.podcastService.remove(Number(id));
  }
}
