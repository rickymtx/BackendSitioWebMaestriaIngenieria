import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('distribucion_asignatura') // Nombre exacto de la tabla en MySQL
export class DistribucionAsignaturas {
  @PrimaryGeneratedColumn()
  id_asignatura: number;

  @Column({ type: 'varchar', length: 150 })
  materia: string;

  @Column({ type: 'int' })
  creditos: number;
}
