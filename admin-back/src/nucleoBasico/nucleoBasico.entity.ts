import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NucleoBasicoCvu } from './nucleoBasicoCvu.entity';

@Entity()
export class NucleoBasico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ length: 100, nullable: true })
  cargo: string;

  @Column({ length: 20, unique: true, nullable: true })
  cedulaProfesional: string;

  @Column({ length: 100, unique: true, nullable: true })
  correo: string;

  @Column({ length: 100, nullable: true })
  especialidad: string;

  @Column({ length: 50, nullable: true })
  gradoMaximo: string;

  @Column({ type: 'text', nullable: true })
  lineasInv: string;

  @Column({ length: 20, nullable: true })
  nivelSNII: string;

  @Column({ type: 'text', nullable: true })
  semblanza: string;

  @Column({ length: 100, nullable: true })
  unidadAdscripcion: string;

  @OneToMany(() => NucleoBasicoCvu, cvu => cvu.profesor, { cascade: true })
  cvu: NucleoBasicoCvu[];
}
