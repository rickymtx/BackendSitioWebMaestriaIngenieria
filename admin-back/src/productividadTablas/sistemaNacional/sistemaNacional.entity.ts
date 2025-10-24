import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sistema_nacional')
export class SistemaNacional {
  @PrimaryGeneratedColumn()
  id_sistema: number;

  @Column('int')
  nivel1: number;

  @Column('int')
  nivelC: number;

  @Column('int')
  numProfesores: number;
}
