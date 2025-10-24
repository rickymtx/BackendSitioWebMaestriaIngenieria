import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lgac_articulos2')
export class LgacArticulos2 {
  @PrimaryGeneratedColumn()
  id_articulo: number;

  @Column({ type: 'varchar', length: 300 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 500 })
  url: string;
}
