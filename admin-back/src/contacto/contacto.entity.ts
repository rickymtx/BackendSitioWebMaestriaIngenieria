// src/contacto/contacto.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contacto' })
export class Contacto {
  @PrimaryGeneratedColumn()
  id_contacto: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nombre: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  puesto: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  correo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  telefono: string;
}
