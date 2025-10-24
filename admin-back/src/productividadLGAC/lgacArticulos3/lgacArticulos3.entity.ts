import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lgac_articulos3')
export class LgacArticulos3 {
  @PrimaryGeneratedColumn()
  id_articulo: number;

  @Column({ type: 'varchar', length: 300 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 500 })
  url: string;
}
