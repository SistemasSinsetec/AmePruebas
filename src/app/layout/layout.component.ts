import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // 🟢 AGREGA ESTA LÍNEA

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
