import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemsComponent } from './poems.component';

const routes: Routes = [
  { path: '', component: PoemsComponent},
  { path: '**', redirectTo: 'poems'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoemsRoutingModule { }
