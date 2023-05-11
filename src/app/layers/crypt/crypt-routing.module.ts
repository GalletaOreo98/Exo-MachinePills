import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptComponent } from './crypt.component';

const routes: Routes = [
  { path: '', component: CryptComponent},
  { path: '**', redirectTo: 'crypt'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptRoutingModule { }
