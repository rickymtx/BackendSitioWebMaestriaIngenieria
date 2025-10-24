import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('requisitos_grado')
export class RequisitosGrado {
  @PrimaryGeneratedColumn()
  id_grado: number;

  @Column('text')
  descripcion: string;
}
