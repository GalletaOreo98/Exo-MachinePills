import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { layerMainData } from '../shared/layers-data/crypt';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { TextCardComponent } from '../shared/components/text-card.component';

@Component({
  selector: 'app-crypt',
  standalone: true,
  imports: [SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, TextCardComponent],
  templateUrl: './crypt.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './crypt.component.css'
})
export class CryptComponent implements OnInit{
  private audio: HTMLAudioElement;
  body: any;
  layerMainData = layerMainData;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private title: Title) { 
    this.title.setTitle(this.layerMainData.layerName);
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
