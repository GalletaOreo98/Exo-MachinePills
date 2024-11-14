import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cyberia.component'),
  },
  {
    path: 'laintest',
    loadComponent: () => import('../laintest/laintest.component').then(m => m.LaintestComponent),
  }
];
export default routes;