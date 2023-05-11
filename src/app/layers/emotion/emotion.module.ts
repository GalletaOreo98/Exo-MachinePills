import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmotionRoutingModule } from './emotion-routing.module';
import { EmotionComponent } from './emotion.component';


@NgModule({
  declarations: [
    EmotionComponent
  ],
  imports: [
    CommonModule,
    EmotionRoutingModule
  ]
})
export class EmotionModule { }
