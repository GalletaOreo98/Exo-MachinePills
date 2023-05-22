import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface carouselImage {
  src: string,
  //date: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: carouselImage[] = [
    { src: "assets/images/layers/immersion/ia/0.jpg"},
    { src: "assets/images/layers/immersion/ia/1.jpg"}
  ];

  lastImage = 1;
  totalImages = 8;

  constructor(config: NgbCarouselConfig) { 
    config.interval = 10000;
  }

  ngOnInit(): void {
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
