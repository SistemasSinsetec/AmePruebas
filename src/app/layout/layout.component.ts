import { Component } from '@angular/core';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
} from '@nebular/theme';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbButtonModule,
    RouterOutlet, // 👈 necesario para cargar los hijos (como solicitudes)
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  items = [{ title: 'Solicitudes', icon: 'file-text-outline', link: '/solicitudes' }];
}
