import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void { 
  }

  takeAPill() {
    const pill = this.elementRef.nativeElement.querySelector('#pill');
    this.renderer.removeClass(pill, "pill-normal");
    this.renderer.addClass(pill, "pill-glitched");
  }

  redirectToURL(): void {
    const url = "https://youtube.com/playlist?list=PLysI2Rm9zlU5y3NhbKyEtzNgXaGSIGjZZ"
    window.open(url, '_blank');
  }

}
