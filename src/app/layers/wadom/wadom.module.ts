import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WadomRoutingModule } from './wadom-routing.module';
import { WadomComponent } from './wadom.component';


@NgModule({
  declarations: [
    WadomComponent
  ],
  imports: [
    CommonModule,
    WadomRoutingModule
  ]
})
export class WadomModule { }
