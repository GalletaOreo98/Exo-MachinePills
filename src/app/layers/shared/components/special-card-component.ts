import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
/** 
Una Card Special que contiene una imagen y/o texto, bordes cromaticos, eventos de click y contenido adicional en el cuerpo de la card text
**/
@Component({
    selector: 'app-special-card',
    standalone: true,
    imports: [NgClass],
    template: `
    <div class="card mx-auto">
      <div class="row g-0">
        <div class="col-md-7" [ngClass]="{ 'border-chromatic': isBorderChromatic }">
            <img [src]="'/assets/images/layers/'+layerName.toLocaleLowerCase()+'/'+imgName"
                class="img-fluid rounded-start" alt="..." (click)="onImageClick()">
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <p class="card-text" style="margin-bottom: 0;"
              [innerHTML]="cardText"
            ></p>
            <ng-content></ng-content>
            <footer class="blockquote-footer" style="margin-top: 0;">{{footer}}</footer>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: `
    .border-chromatic {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }
    
    .border-chromatic img {
      padding: 3px;
      border: 2px solid transparent;
      background: linear-gradient(90deg, rgba(255, 0, 255, 0.5), rgba(0, 255, 255, 0.5), rgba(255, 255, 0, 0.5));
      background-size: 300% 300%;
      animation: borderGlow 5s ease-in-out infinite;
    }
    
    @keyframes borderGlow {
      0% {
        background-position: 25% 50%;
      }
      50% {
        background-position: 75% 50%;
      }
      100% {
        background-position: 25% 50%;
      }
    }
  `
})
export class SpecialCardComponent {
    @Input() imgName: string;
    @Input() layerName: string;
    @Input() cardText: string;
    @Input() footer: string;

    @Input() isBorderChromatic: boolean = false;

    // Evento de salida que emitira cuando se haga clic en la imagen
    @Output() imageClick: EventEmitter<void> = new EventEmitter<void>();


    constructor() {
        this.imgName = 'imageName.extension';
        this.layerName = 'Insert layer name here';
        this.cardText = 'Insert text here';
        this.footer = 'Insert footer here 00/00/0000'

    }

    // Función que se ejecutara cuando se haga clic en la imagen
    onImageClick(): void {
        this.imageClick.emit(); // Emite el evento
    }
}
