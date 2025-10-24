import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('convenios_firmados') // nombre exacto de tu tabla en MySQL
export class ConveniosFirmados {
  @PrimaryGeneratedColumn()
  id_convenios: number;

  @Column({ type: 'int' })
  empresaProd: number;
}
