import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IntegranteCuerpo } from './integrantesCuerpo.entity';

@Entity('cuerpos_academicos')
export class CuerpoAcademico {
  @PrimaryGeneratedColumn()
  id_cuerpo: number;

  @Column({ length: 255 })
  nomProy: string;

  // Relación 1:N con integrantes_cuerpo
  @OneToMany(() => IntegranteCuerpo, (integrante) => integrante.cuerpo)
  integrantes: IntegranteCuerpo[];
}
