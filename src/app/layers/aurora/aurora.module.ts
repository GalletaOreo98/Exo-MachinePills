import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuroraRoutingModule } from './aurora-routing.module';
import { AuroraComponent } from './aurora.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';


@NgModule({
  declarations: [
    AuroraComponent,
    ModalBasicComponent
  ],
  imports: [
    CommonModule,
    AuroraRoutingModule
  ]
})
export class AuroraModule { }
