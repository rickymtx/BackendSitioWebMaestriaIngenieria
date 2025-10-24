// src/asignaturasBasicas/asignaturasBasicas.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asignaturas_optativas' })
export class AsignaturasOptativas {
  @PrimaryGeneratedColumn()
  id_optativas: number;

  @Column({ type: 'varchar', length: 150 })
  materia: string;

  @Column({ type: 'int' })
  creditos: number;
}
