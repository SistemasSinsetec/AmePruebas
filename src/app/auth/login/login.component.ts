import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['../auth-styles.css'],
})
export class LoginComponent {
  loginUser = '';
  loginPass = '';
  resultado = '';
  cargando = false;

  constructor(private auth: AuthService, private router: Router) {}

  async login() {
    if (this.cargando) return;

    this.cargando = true;

    try {
      const respuesta = await this.auth.enviar(
        [
          ['0x02', '0x03'],
          ['0x03', this.loginUser],
          ['0x11', this.loginPass],
        ],
        'login'
      );

      // 🔹 Si el servidor responde correctamente, navega
      if (respuesta) {
        console.log('🟢 Login exitoso, redirigiendo...');
        this.router.navigateByUrl('/solicitudes');
      } else {
        this.resultado = '⚠️ No se recibió respuesta del servidor.';
      }
    } catch (err: any) {
      this.resultado = `❌ Error al iniciar sesión: ${err.message || err}`;
    } finally {
      this.cargando = false;
    }
  }
}
