import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberiaComponent } from './pages/cyberia/cyberia.component';

const routes: Routes = [
  { path: '', component: CyberiaComponent},
  { path: '**', redirectTo: 'cyberia'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberiaRoutingModule { }
