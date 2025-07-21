import { Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { layerMainData, layerBodyData } from "../shared/layers-data/aurora";
import { ImgCardComponent } from '../shared/components/img-card.component';
import { SpecialCardComponent } from '../shared/components/special-card-component';
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-aurora',
  standalone: true,
  imports: [ModalBasicComponent, SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, ImgCardComponent, SpecialCardComponent],
  templateUrl: './aurora.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './aurora.component.css'
})
export class AuroraComponent {
  layerMainData = layerMainData;
  layerBodyData = layerBodyData;
  private audio: HTMLAudioElement;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(this.layerMainData.layerName);

    this.meta.updateTag({ name: 'description', content: "Let's color all the ways." });
    this.meta.updateTag({ name: 'keywords', content: 'aurora, fan art lain iwakura, cyberpunk, Cyberia club, club, Exo-Machine, Exo, Machine, Exo-Machine Pills, serial experiments lain, or3odev, lain chikita, lain iwakura' });
    this.meta.updateTag({ name: 'author', content: 'GalletaOreo98' });

    this.meta.updateTag({ property: 'og:title', content: 'Aurora' });
    this.meta.updateTag({ property: 'og:image', content: 'https://exo-machinepills.com/assets/images/layers/aurora/main.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Aurora' });
    this.meta.updateTag({ name: 'twitter:description', content: "Let's color all the ways." });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://exo-machinepills.com/assets/images/layers/aurora/main.jpg' });

    this.audio = new Audio();
    this.audio.src = '/assets/audio/meow-cat.mp3';
  }

  handleImageCatClick() {
    if (!this.audio) this.audio = new Audio('/assets/audio/meow-cat.mp3');
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }

  handleImageXmasClick() {
    this.audio.src = '/assets/audio/short-8bits-xmas-song.mp3';
    this.audio.play();
    this.printConfetti();
  }

  printConfetti() {
    const duration = 3000; // milisegundos
    confetti({
      particleCount: 60,
      spread: 160,
      origin: { y: 0.6 },
    });
    // Limpiar y resetear confetti después de 3 segundos
    setTimeout(() => confetti.reset(), duration);
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }
}
