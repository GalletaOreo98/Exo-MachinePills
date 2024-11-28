import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyInfoCardComponent } from "./my-info-card/my-info-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MyInfoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  isModalOpen: boolean = false;
  currentime: string;


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.currentime = new Date().getFullYear().toString();
  }

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

  //Modal de mi carta de información
  openModal() {
    this.isModalOpen = true;
  }

  //Recibe el evento de cierre del modal
  receiveCloseModalEvent($event: boolean) {
    this.isModalOpen = $event;
  }
}
