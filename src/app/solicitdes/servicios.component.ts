import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class RegisterSolicitudesComponent {
  solicitud = {
    cliente: '',
    solicitante: '',
    representante: '',
    ubicacion: '',
    descripcionServicio: '',
  };

  partidas = [
    {
      tipoTrabajo: '',
      naturalezaTrabajo: '',
      tipoMaquina: '',
      fecha: '',
      cantidad: 1,
      precioUnitario: 0,
      comentario: '',
    },
  ];

  // ✅ Calculos automáticos
  get subtotal() {
    return this.partidas.reduce((acc, p) => acc + (p.cantidad || 0) * (p.precioUnitario || 0), 0);
  }

  get ivaTotal() {
    return this.subtotal * 0.16;
  }

  get total() {
    return this.subtotal + this.ivaTotal;
  }

  // ✅ Métodos del HTML
  nextStep() {
    console.log('➡️ Siguiente paso');
  }

  prevStep() {
    console.log('⬅️ Paso anterior');
  }

  addPartida() {
    this.partidas.push({
      tipoTrabajo: '',
      naturalezaTrabajo: '',
      tipoMaquina: '',
      fecha: '',
      cantidad: 1,
      precioUnitario: 0,
      comentario: '',
    });
  }

  eliminarPartida(i: number) {
    this.partidas.splice(i, 1);
  }

  onSubmit() {
    alert('✅ Solicitud guardada correctamente');
  }
}
