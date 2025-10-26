import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Podcast } from './podcast.entity';

@Injectable()
export class PodcastService {
  constructor(
    @InjectRepository(Podcast)
    private podcastRepository: Repository<Podcast>,
  ) {}

  findAll(): Promise<Podcast[]> {
    return this.podcastRepository.find();
  }

  create(podcast: Partial<Podcast>): Promise<Podcast> {
    const nuevoPodcast = this.podcastRepository.create(podcast);
    return this.podcastRepository.save(nuevoPodcast);
  }

  async update(id: number, podcast: Partial<Podcast>): Promise<Podcast> {
    const podcastExistente = await this.podcastRepository.findOneBy({ id_podcast: id });
    if (!podcastExistente) {
      throw new NotFoundException(`Podcast con id ${id} no encontrado`);
    }
    Object.assign(podcastExistente, podcast);
    return this.podcastRepository.save(podcastExistente);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.podcastRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Podcast con id ${id} no encontrado`);
    }
  }
}
