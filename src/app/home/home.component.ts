import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  takeAPill() {
    const pill = this.elementRef.nativeElement.querySelector('#pill');
    //this.renderer.removeClass(pill, "pill-normal");
    this.renderer.addClass(pill, "pill-glitched");

    const hiddenLayer = this.elementRef.nativeElement.querySelector('#hidden-layer');
    //this.renderer.removeStyle(hiddenLayer, "color");
    this.renderer.setStyle(hiddenLayer, "color", "#414141");
  }

  redirectToURL(): void {
    const url = "https://youtube.com/playlist?list=PLysI2Rm9zlU5y3NhbKyEtzNgXaGSIGjZZ"
    window.open(url, '_blank');
  }
}
