import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuroraComponent } from './aurora.component';

const routes: Routes = [
  { path: '', component: AuroraComponent},
  { path: '**', redirectTo: 'aurora'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuroraRoutingModule { }
