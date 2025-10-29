import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NucleoBasico } from './nucleoBasico.entity';

@Entity()
export class NucleoBasicoCvu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enlace: string;

  @ManyToOne(() => NucleoBasico, profesor => profesor.cvu, { onDelete: 'CASCADE' })
  profesor: NucleoBasico;
}
