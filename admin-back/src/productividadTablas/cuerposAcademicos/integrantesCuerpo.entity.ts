import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CuerpoAcademico } from './cuerposAcademicos.entity';

@Entity('integrantes_cuerpo')
export class IntegranteCuerpo {
  @PrimaryGeneratedColumn()
  id_integrante: number;

  @Column()
  id_cuerpo: number;

  @Column({ length: 150 })
  nombre: string;

  // Relación N:1 con cuerpos_academicos
  @ManyToOne(() => CuerpoAcademico, (cuerpo) => cuerpo.integrantes)
  @JoinColumn({ name: 'id_cuerpo' })
  cuerpo: CuerpoAcademico;
}
