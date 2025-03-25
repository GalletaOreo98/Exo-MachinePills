import { Routes } from '@angular/router';

export const cyberiaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cyberia.component'),
  },
  {
    path: 'laintest',
    loadComponent: () => import('../laintest/laintest.component').then(c => c.LaintestComponent),
  }
];