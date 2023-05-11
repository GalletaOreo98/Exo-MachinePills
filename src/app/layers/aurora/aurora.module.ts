import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuroraRoutingModule } from './aurora-routing.module';
import { AuroraComponent } from './aurora.component';


@NgModule({
  declarations: [
    AuroraComponent
  ],
  imports: [
    CommonModule,
    AuroraRoutingModule
  ]
})
export class AuroraModule { }
