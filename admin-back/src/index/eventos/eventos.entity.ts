import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('eventos') // Nombre exacto de la tabla en MySQL
export class Evento {
  @PrimaryGeneratedColumn()
  id_evento: number;

  @Column({ type: 'varchar', length: 100 })
  fecha: string;

  @Column({ type: 'varchar', length: 250 })
  titulo: string;

  @Column({ type: 'varchar', length: 150 })
  lugar: string;

  @Column({ type: 'text' })
  descripcion: string;
}
