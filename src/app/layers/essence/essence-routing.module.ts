import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssenceComponent } from './essence.component';

const routes: Routes = [
  { path: '', component: EssenceComponent},
  { path: '**', redirectTo: 'essence'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EssenceRoutingModule { }
