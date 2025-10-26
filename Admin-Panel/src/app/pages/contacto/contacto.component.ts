import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Contacto } from './contacto.model';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy {
  contactos: Contacto[] = [];
  loading = false;
  errorMsg: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.loading = true;
    this.errorMsg = null;

    this.contactoService.getContactos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.contactos = data;
          this.loading = false;
        },
        error: (err: any) => {
          this.errorMsg = err?.message ?? 'Error al obtener contactos';
          console.error('GET contactos error', err);
          this.loading = false;
        }
      });
  }

  eliminarContacto(id?: number): void {
    if (!id) return;
    if (confirm('¿Estás seguro de eliminar este contacto?')) {
      this.contactoService.eliminarContacto(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            console.log(`Contacto con id ${id} eliminado`);
            this.cargarContactos();
          },
          error: (err: any) => {
            console.error('Error al eliminar el contacto:', err);
            this.errorMsg = 'No se pudo eliminar el contacto.';
          }
        });
    }
  }

  // Para controlar si se está agregando un nuevo contacto
  nuevoContacto: Contacto | null = null;

  agregarContacto(): void {
    // Crea un objeto vacío para bindear a la tabla
    this.nuevoContacto = { id: 0, nombre: '', puesto: '', correo: '', telefono: '' } as Contacto;
  }

  guardarNuevoContacto(): void {
    if (!this.nuevoContacto) return;

    const { nombre, puesto, correo, telefono } = this.nuevoContacto;

    if (!nombre || !puesto || !correo || !telefono) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.contactoService.createContacto(this.nuevoContacto)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          alert('Contacto guardado exitosamente');
          this.nuevoContacto = null; // Quitar la fila de inputs
          this.cargarContactos();      // Recargar contactos
        },
        error: (err) => {
          console.error('Error al guardar contacto:', err);
          alert('Hubo un error al guardar el contacto');
        }
      });
  }

  cancelarNuevoContacto(): void {
    this.nuevoContacto = null;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
