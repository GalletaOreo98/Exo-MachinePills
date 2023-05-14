import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WadomComponent } from './wadom.component';

const routes: Routes = [
  { path: '', component: WadomComponent},
  { path: '**', redirectTo: 'wadom'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WadomRoutingModule { }
