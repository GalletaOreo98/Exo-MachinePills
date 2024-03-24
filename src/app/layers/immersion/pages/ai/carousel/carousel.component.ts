import { Component } from '@angular/core';
import { NgbCarouselModule, NgbSlideEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface carouselImage {
  src: string,
  //date: string
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images: carouselImage[] = [
    { src: "assets/images/layers/immersion/ia/0.jpg"},
    { src: "assets/images/layers/immersion/ia/1.jpg"}
  ];

  lastImage = 1;
  totalImages = 5;

  constructor(config: NgbCarouselConfig) { 
    config.interval = 10000;
  }

  onSlideChange(event: NgbSlideEvent) {
    const activeSlide = Number(event.current.slice(10));
    if(this.lastImage != activeSlide || this.lastImage === this.totalImages - 1) return;
    console.log("long: " + this.images.length);
    console.log("actual: " + activeSlide);
    console.log("lastimage: " + this.lastImage);
    this.images.push({ src: `assets/images/layers/immersion/ia/${(activeSlide+1)}.jpg`});
    this.lastImage++;
  }
}
