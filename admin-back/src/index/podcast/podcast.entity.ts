import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('podcast')
export class Podcast {
  @PrimaryGeneratedColumn()
  id_podcast: number;

  @Column({ length: 250 })
  titulo: string;

  @Column('text')
  url: string;

  @Column('text')
  descripcion: string;
}
