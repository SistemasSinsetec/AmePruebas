import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['../auth-styles.css'], // ✅ Ruta al CSS compartido
})
export class LoginComponent {
  loginUser = '';
  loginPass = '';
  resultado = '';
  cargando = false;

  constructor(private auth: AuthService) {}

  async login() {
    if (this.cargando) return; // evita doble clic

    this.cargando = true;

    try {
      // 🔹 Llamada al servicio
      const respuesta = await this.auth.enviar(
        [
          ['0x02', '0x03'],
          ['0x03', this.loginUser],
          ['0x11', this.loginPass],
        ],
        'login'
      ); //50seg muy tarde

      // 🔹 Muestra directamente la respuesta del servidor
      this.resultado = respuesta
        ? `🟢 Respuesta recibida:\n${respuesta}`
        : '⚠️ No se recibió respuesta del servidor.';
    } catch (err: any) {
      // 🔹 Captura errores de conexión u otros
      this.resultado = `❌ Error al iniciar sesión: ${err.message || err}`;
    } finally {
      // 🔹 Siempre se ejecuta al final (reactiva botón)
      this.cargando = false;
    }
  }
}
