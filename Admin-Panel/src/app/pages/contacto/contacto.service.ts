import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contacto } from './contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private baseUrl = 'http://localhost:3000';
  private endpoint = `${this.baseUrl}/contacto`;

  constructor(private http: HttpClient) { }

  // GET lista de contactos
  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  createContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.endpoint, contacto)
      .pipe(
        catchError(this.handleError)
      );
  }

  // DELETE contacto por id
  eliminarContacto(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo básico de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error en ContactoService:', error);
    return throwError(() => new Error(error.message || 'Error en la petición HTTP'));
  }
}
