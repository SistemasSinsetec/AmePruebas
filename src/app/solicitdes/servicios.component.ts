import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 🟣 Importaciones Nebular necesarias
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // ✅ Nebular
    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ],
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

  // ✅ Cálculos automáticos
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
    // Validación simple
    if (!this.solicitud.cliente || !this.solicitud.solicitante) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    console.log('✅ Solicitud guardada:', this.solicitud, this.partidas);
    alert('✅ Solicitud guardada correctamente');
  }
}
