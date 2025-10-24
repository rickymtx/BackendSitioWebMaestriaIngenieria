import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Podcast } from './podcast.entity';

@Injectable()
export class PodcastService {
  constructor(
    @InjectRepository(Podcast)
    private podcastRepository: Repository<Podcast>,
  ) {}

  // Método GET para obtener todos los podcasts
  findAll(): Promise<Podcast[]> {
    return this.podcastRepository.find();
  }
}
