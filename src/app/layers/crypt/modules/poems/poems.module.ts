import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoemsRoutingModule } from './poems-routing.module';
import { PoemsComponent } from './poems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PoemsComponent
  ],
  imports: [
    CommonModule,
    PoemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PoemsModule { }
