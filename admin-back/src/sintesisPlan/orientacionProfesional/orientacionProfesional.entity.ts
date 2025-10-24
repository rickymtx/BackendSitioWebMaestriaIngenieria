import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('orientacion_profesional') // Nombre exacto de la tabla en tu BD
export class OrientacionProfesional {
  @PrimaryGeneratedColumn()
  id_orientacion: number;

  @Column({ type: 'varchar', length: 150 })
  materia: string;

  @Column({ type: 'int' })
  creditos: number;
}
