import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cyberia.component'),
  },
/*   {
    path: 'otraruta',
    loadComponent: () => import('./otraruta/otraruta.component'),
  }, */
];
export default routes;