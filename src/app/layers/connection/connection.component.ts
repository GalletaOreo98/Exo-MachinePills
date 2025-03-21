import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { TextCardComponent } from '../shared/components/text-card.component';
import { SpecialCardComponent } from '../shared/components/special-card-component';
import { layerMainData, layerBodyData } from "../shared/layers-data/connection";
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, TextCardComponent, SpecialCardComponent],
  templateUrl: './connection.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {
  layerMainData = layerMainData;
  layerBodyData = layerBodyData;

  constructor(private title:Title) {
    this.title.setTitle(this.layerMainData.layerName);
   }

   handleLoveClick() {
    this.printConfetti();
   }

   printConfetti() {
     const duration = 3000; // milisegundos
     const scalar = 1;
     const heart = confetti.shapeFromText({ text: '❤️', scalar });
     confetti({
       particleCount: 60,
       spread: 160,
       origin: { y: 0.6 },
       shapes: [heart],
       flat: true,
      });
     // Limpiar y resetear confetti después de 3 segundos
     setTimeout(() => confetti.reset(), duration);
   }
}
