import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 agrega esta línea
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule], // 👈 agrégalo aquí también
  templateUrl: './register.component.html',
  styleUrls: ['../auth-styles.css'],
})
export class RegisterComponent {
  regUser = '';
  regPass = '';
  regMail = '';
  regName = '';
  regLast = '';
  resultado = '';
  cargando = false;
  mostrarPass = false;

  constructor(private auth: AuthService) {}

  async register() {
    if (this.cargando) return;

    if (!this.regUser || !this.regPass || !this.regMail || !this.regName || !this.regLast) {
      this.resultado = '⚠️ Todos los campos son obligatorios.';
      return;
    }

    this.cargando = true;
    this.resultado = '⏳ Registrando usuario...';

    try {
      this.resultado = await this.auth.enviar(
        [
          ['0x02', '0x05'],
          ['0x03', this.regUser],
          ['0x12', this.regPass],
          ['0x06', this.regMail],
          ['0x04', this.regName],
          ['0x05', this.regLast],
        ],
        'registro'
      );

      const r = this.resultado.toLowerCase();
      if (r.includes('éxito') || r.includes('registrado')) {
        this.resultado = '✅ Usuario registrado correctamente.';
      } else if (r.includes('existe')) {
        this.resultado = '⚠️ Este usuario o correo ya está registrado.';
      } else {
        this.resultado = '❌ Error al registrar usuario.';
      }
    } catch (error) {
      console.error('Error en registro:', error);
      this.resultado = '❌ Error al conectar con el servidor.';
    } finally {
      this.cargando = false;
    }
  }
}
