import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lgac_capitulos3')
export class LgacCapitulos3 {
  @PrimaryGeneratedColumn()
  id_capitulo: number;

  @Column({ type: 'varchar', length: 300 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 500 })
  url: string;
}
