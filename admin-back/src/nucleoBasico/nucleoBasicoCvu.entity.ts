import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NucleoBasico } from './nucleoBasico.entity';

@Entity('nucleo_basico_cvu')
export class NucleoBasicoCvu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enlace: string;

  @ManyToOne(() => NucleoBasico, (profesor) => profesor.cvu, {
    onDelete: 'CASCADE',
  })
  profesor: NucleoBasico;
}
