import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImmersionComponent } from './immersion.component';

const routes: Routes = [
  { path: '', component: ImmersionComponent},
  { path: '**', redirectTo: 'immersion'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmersionRoutingModule { }
