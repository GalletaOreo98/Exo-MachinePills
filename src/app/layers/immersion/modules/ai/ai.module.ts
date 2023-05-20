import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AiRoutingModule } from './ai-routing.module';
import { AiComponent } from './ai.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AiComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule,
    NgbCarouselModule
  ]
})
export class AiModule { }
