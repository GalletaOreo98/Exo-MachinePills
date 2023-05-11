import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtherComponent } from './ether.component';

const routes: Routes = [
  { path: '', component: EtherComponent},
  { path: '**', redirectTo: 'ether'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtherRoutingModule { }
