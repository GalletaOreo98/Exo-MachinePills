import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtherRoutingModule } from './ether-routing.module';
import { EtherComponent } from './ether.component';


@NgModule({
  declarations: [
    EtherComponent
  ],
  imports: [
    CommonModule,
    EtherRoutingModule
  ]
})
export class EtherModule { }
