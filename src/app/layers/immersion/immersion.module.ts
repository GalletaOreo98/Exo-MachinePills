import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmersionRoutingModule } from './immersion-routing.module';
import { ImmersionComponent } from './immersion.component';


@NgModule({
  declarations: [
    ImmersionComponent
  ],
  imports: [
    CommonModule,
    ImmersionRoutingModule
  ]
})
export class ImmersionModule { }
