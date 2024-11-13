import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    //Home
    {path: '', component: HomeComponent},
  
    //The 7 layers
    {path: 'layers/essence', loadComponent: () => import('./layers/essence/essence.component').then(c => c.EssenceComponent)},
    {path: 'layers/immersion', loadComponent: () => import('./layers/immersion/immersion.component').then(c => c.ImmersionComponent)},
    {path: 'layers/aurora', loadComponent: () => import('./layers/aurora/aurora.component').then(c => c.AuroraComponent)},
    {path: 'layers/wadom', loadComponent: () => import('./layers/wadom/wadom.component').then(c => c.WadomComponent)},
    {path: 'layers/connection', loadComponent: () => import('./layers/connection/connection.component').then(c => c.ConnectionComponent)},
    {path: 'layers/ether', loadComponent: () => import('./layers/ether/ether.component').then(c => c.EtherComponent)},
    {path: 'layers/crypt', loadComponent: () => import('./layers/crypt/crypt.component').then(c => c.CryptComponent)},
    
    //Cyberia
    {path: 'cyberia', loadChildren: () => import('./cyberia/pages/cyberia/cyberia.routes')},

    //Error and redirect
    {path: 'error', loadComponent: () => import('./error-page/error-page.component')},
    {path: '**', component: HomeComponent},
  ];
