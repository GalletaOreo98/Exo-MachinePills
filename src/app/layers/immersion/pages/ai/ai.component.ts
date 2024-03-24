import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css'
})
export class AiComponent {

}
