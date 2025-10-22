import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'eventos',
    loadChildren: () => import('./components/eventos/eventos.module').then(m => m.EventosModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./components/tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'artistas',
    loadChildren: () => import('./components/artistas/artistas.module').then(m => m.ArtistasModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./components/ajustes/ajustes.module').then(m => m.AjustesModule)
  },
  {
    path: 'nuevo',
    component: NuevoComponenteComponent
  }
];
