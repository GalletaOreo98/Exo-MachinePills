import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberiaRoutingModule } from './cyberia-routing.module';
import { CyberiaComponent } from './pages/cyberia/cyberia.component';


@NgModule({
  declarations: [
    CyberiaComponent
  ],
  imports: [
    CommonModule,
    CyberiaRoutingModule
  ]
})
export class CyberiaModule { }
