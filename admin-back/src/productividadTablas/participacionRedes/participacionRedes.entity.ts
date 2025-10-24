import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('participacion_redes')
export class ParticipacionRedes {
  @PrimaryGeneratedColumn()
  id_participacion: number;

  @Column('text')
  nombre: string;
}
