import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionComponent } from './emotion.component';

const routes: Routes = [
  { path: '', component: EmotionComponent},
  { path: '**', redirectTo: 'emotion'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmotionRoutingModule { }
