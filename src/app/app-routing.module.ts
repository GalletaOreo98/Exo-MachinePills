import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //Home
  {path: '', component: HomeComponent},

  //The 7 layers
  {path: 'layers/essence', loadChildren: () => import('./layers/essence/essence.module').then( m => m.EssenceModule)},
  {path: 'layers/immersion', loadChildren: () => import('./layers/immersion/immersion.module').then( m => m.ImmersionModule)},
  {path: 'layers/aurora', loadChildren: () => import('./layers/aurora/aurora.module').then( m => m.AuroraModule)},
  {path: 'layers/emotion', loadChildren: () => import('./layers/emotion/emotion.module').then( m => m.EmotionModule)},
  {path: 'layers/connection', loadChildren: () => import('./layers/connection/connection.module').then( m => m.ConnectionModule)},
  {path: 'layers/ether', loadChildren: () => import('./layers/ether/ether.module').then( m => m.EtherModule)},
  {path: 'layers/crypt', loadChildren: () => import('./layers/crypt/crypt.module').then( m => m.CryptModule)},

  //Error and redirect
  {path: 'error', loadChildren: () => import('./error-page/error-page.module').then( m => m.ErrorPageModule)},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
