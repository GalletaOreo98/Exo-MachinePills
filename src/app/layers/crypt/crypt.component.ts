import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit {

  private audio: HTMLAudioElement;
  body: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private title: Title) { 
    this.title.setTitle('Crypt');
    this.audio = new Audio();
    this.audio.src = '/assets/audio/creepy-cavern-ambience.mp3';
  }

  ngOnInit(): void {
    this.body = this.renderer.parentNode(this.renderer.parentNode(this.elementRef.nativeElement));
    this.renderer.addClass(this.body, "error-page-bg");
    this.audio.play();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.body, "error-page-bg");
    this.audio.pause();
  }

}
