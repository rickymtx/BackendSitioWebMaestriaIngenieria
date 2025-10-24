import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lgac_proyectos4')
export class LgacProyectos4 {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column({ type: 'varchar', length: 300 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 500 })
  url: string;
}
