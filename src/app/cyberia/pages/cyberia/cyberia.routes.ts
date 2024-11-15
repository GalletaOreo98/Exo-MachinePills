import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cyberia.component'),
  },
  {
    path: 'laintest',
    loadComponent: () => import('../laintest/laintest.component').then(c => c.LaintestComponent),
  }
];
export default routes;