import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  //login
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
  },

  //REGISTRO (carga diferida)
  {
    path: 'registro',
    loadComponent: () =>
      import('./auth/register/register.component').then((m) => m.RegisterComponent),
  },

  //RESTABLECER CONTRASEÑA (carga diferida)
  {
    path: 'password',
    loadComponent: () => import('./auth/reset/reset.component').then((m) => m.ResetComponent),
  },

  //SOLICITUDES (carga diferida)
  {
    path: 'solicitudes',
    loadComponent: () =>
      import('./solicitdes/servicios.component').then((m) => m.RegisterSolicitudesComponent),
  },

  //Cualquier ruta no válida redirige al login
  {
    path: '**',
    redirectTo: 'login',
  },
];

//https://github.com/SistemasSinsetec/AmePruebas.git
