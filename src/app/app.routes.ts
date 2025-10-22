import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: async () => {
          const m = await import('./components/dashboard/dashboard.module');
          return m.DashboardModule;
        }
      },
      {
        path: 'eventos',
        loadChildren: async () => {
          const m = await import('./components/eventos/eventos.module');
          return m.EventosModule;
        }
      },
      {
        path: 'tickets',
        loadChildren: async () => {
          const m = await import('./components/tickets/tickets.module');
          return m.TicketsModule;
        }
      },
      {
        path: 'artistas',
        loadChildren: async () => {
          const m = await import('./components/artistas/artistas.module');
          return m.ArtistasModule;
        }
      },
      {
        path: 'ajustes',
        loadChildren: async () => {
          const m = await import('./components/ajustes/ajustes.module');
          return m.AjustesModule;
        }
      },
      {
        path: 'nuevo',
        loadChildren: async () => {
          const m = await import('./nuevo-componente/nuevo-componente.module');
          return m.NuevoComponenteModule;
        }
      }
    ]
  }
];
