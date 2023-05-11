import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EssenceRoutingModule } from './essence-routing.module';
import { EssenceComponent } from './essence.component';


@NgModule({
  declarations: [
    EssenceComponent
  ],
  imports: [
    CommonModule,
    EssenceRoutingModule
  ]
})
export class EssenceModule { }
