import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('requisitos_permanencia')
export class RequisitosPermanencia {
  @PrimaryGeneratedColumn()
  id_requisito: number;

  @Column('text')
  descripcion: string;
}
