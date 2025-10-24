import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lgyac') // Nombre exacto de tu tabla en MySQL
export class Lgyac {
  @PrimaryGeneratedColumn()
  id_lgyac: number;

  @Column({ type: 'varchar', length: 200 })
  nombre: string;

  @Column({ type: 'text' })
  objetivos: string;
}
