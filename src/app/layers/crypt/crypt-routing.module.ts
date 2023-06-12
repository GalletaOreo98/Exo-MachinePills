import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptComponent } from './crypt.component';

const routes: Routes = [
  { path: '', component: CryptComponent},
  {path: 'poems',loadChildren: () => import('./modules/poems/poems.module').then(m => m.PoemsModule)},
  { path: '**', redirectTo: 'crypt'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptRoutingModule { }
