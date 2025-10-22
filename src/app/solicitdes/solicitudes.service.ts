import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  private apiUrl = '';
  solicitud: any;
  partidas: any;

  constructor(private http: HttpClient) {}

  // Crear nueva solicitud
  crearSolicitud(data: any): Observable<any> {
    const payload = {
      '0x02': '0x0b',
      ...this.solicitud,
      partidas: this.partidas,
    };

    return this.http.post(this.apiUrl, payload);
  }

  // Obtener todas las solicitudes
  getSolicitudes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Eliminar una solicitud por ID
  eliminarSolicitud(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
