import { Component, OnInit } from '@angular/core';

interface carouselImage {
  src: string,
  date: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images:carouselImage[] = [
    {src: "assets/images/layers/immersion/ia/0.jpg", date: "19/05/23"},
    {src: "assets/images/layers/immersion/ia/1.jpg", date: "19/05/23"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
