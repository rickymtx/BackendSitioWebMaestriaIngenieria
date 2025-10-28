import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
export type CategoriaTipo = 'antecedentes' | 'requisitos' | 'seleccion' | 'URLs';

@Entity('requisitos_ingreso')
export class RequisitosIngreso {
  @PrimaryGeneratedColumn()
  id_requisito: number;

  @Column({
    type: 'enum',
    enum: ['antecedentes', 'requisitos', 'seleccion', 'URLs'],
  })
  categoria: CategoriaTipo;

  @Column('text')
  descripcion: string;
}
