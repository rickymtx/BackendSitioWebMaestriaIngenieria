import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('otros_reconocimientos')
export class OtrosReconocimientos {
  @PrimaryGeneratedColumn()
  id_reconocimientos: number;

  @Column({ length: 200 })
  profesor: string;

  @Column('text')
  tipoRec: string;
}
