import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'egresados' })
export class Egresados {
  @PrimaryGeneratedColumn()
  id_egresados: number;

  @Column('text')
  url: string;
}
