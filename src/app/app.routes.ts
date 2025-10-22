import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 🔸 Login sin layout
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
  },

  // 🔸 Registro
  {
    path: 'registro',
    loadComponent: () =>
      import('./auth/register/register.component').then((m) => m.RegisterComponent),
  },

  // 🔸 Reset password
  {
    path: 'password',
    loadComponent: () => import('./auth/reset/reset.component').then((m) => m.ResetComponent),
  },

  // 🔹 Rutas internas con layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'solicitudes',
        loadComponent: () =>
          import('./solicitdes/servicios.component').then((m) => m.RegisterSolicitudesComponent),
      },
      { path: '', redirectTo: 'solicitudes', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
