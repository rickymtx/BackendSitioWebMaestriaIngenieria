// src/asignaturasBasicas/asignaturasBasicas.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asignaturas_basicas' })
export class AsignaturasBasicas {
  @PrimaryGeneratedColumn()
  id_asignatura: number;

  @Column({ type: 'varchar', length: 150 })
  materia: string;

  @Column({ type: 'int' })
  creditos: number;
}
