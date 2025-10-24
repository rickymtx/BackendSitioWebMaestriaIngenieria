import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('perfil_deseable')
export class PerfilDeseable {
  @PrimaryGeneratedColumn()
  id_perfil: number;

  @Column('int')
  numProfesores: number;
}
