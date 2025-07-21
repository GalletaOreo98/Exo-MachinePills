import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
/** 
Una Card Special que contiene una imagen y/o texto, bordes cromaticos, eventos de click y contenido adicional en el cuerpo de la card text
**/
@Component({
  selector: 'app-special-card',
  standalone: true,
  imports: [NgClass, NgStyle, CommonModule],
  template: `
    <div class="card mx-auto">
      <div class="row g-0">
        <div class="col-md-7" 
          [ngStyle]="{
            '--color1': color1, 
            '--color2': color2, 
            '--color3': color3
          }"
          [ngClass]="{ 'border-chromatic': isBorderChromatic }">
            <div class="image-container" [class.glitch-active]="internalGlitchState">
              <img [src]="'/assets/images/layers/'+layerName.toLocaleLowerCase()+'/'+imgName" class="img-fluid rounded-start main-image" alt="..." (click)="onImageClick()">
              @if (internalGlitchState) {
                <img [src]="'/assets/images/layers/'+layerName.toLocaleLowerCase()+'/'+imgName" class="img-fluid rounded-start glitch-layer glitch-layer-1" alt="">
              }
              @if (internalGlitchState) {
                <img [src]="'/assets/images/layers/'+layerName.toLocaleLowerCase()+'/'+imgName" class="img-fluid rounded-start glitch-layer glitch-layer-2" alt="">
              }
            </div>
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
      background: linear-gradient(90deg, var(--color1), var(--color2), var(--color3));
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

    .image-container {
      position: relative;
      overflow: hidden;
    }

    .main-image {
      position: relative;
      z-index: 3;
      transition: all 0.1s ease;
    }

    .glitch-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .glitch-active .main-image {
      animation: glitch-main 0.8s linear;
    }

    .glitch-layer-1 {
      z-index: 2;
      animation: glitch-1 0.8s linear;
      filter: hue-rotate(90deg) saturate(2);
      mix-blend-mode: screen;
    }

    .glitch-layer-2 {
      z-index: 1;
      animation: glitch-2 0.8s linear;
      filter: hue-rotate(180deg) contrast(1.5);
      mix-blend-mode: multiply;
    }

    @keyframes glitch-main {
      0%, 100% {
        transform: translate(0);
        filter: none;
      }
      10% {
        transform: translate(-2px, 2px);
        filter: hue-rotate(45deg);
      }
      20% {
        transform: translate(2px, -1px);
        filter: contrast(1.2);
      }
      30% {
        transform: translate(-1px, 3px);
        filter: saturate(1.5);
      }
      40% {
        transform: translate(3px, -2px);
        filter: brightness(1.1);
      }
      50% {
        transform: translate(-2px, -3px);
        filter: hue-rotate(90deg) contrast(1.3);
      }
      60% {
        transform: translate(1px, 2px);
        filter: invert(0.1);
      }
      70% {
        transform: translate(-3px, 1px);
        filter: saturate(2);
      }
      80% {
        transform: translate(2px, -2px);
        filter: brightness(0.9);
      }
      90% {
        transform: translate(-1px, 1px);
        filter: contrast(1.1);
      }
    }

    @keyframes glitch-1 {
      0%, 100% {
        transform: translate(0);
        opacity: 0;
      }
      15% {
        transform: translate(-3px, 2px);
        opacity: 0.7;
      }
      25% {
        transform: translate(2px, -3px);
        opacity: 0.5;
      }
      35% {
        transform: translate(-1px, 4px);
        opacity: 0.8;
      }
      45% {
        transform: translate(4px, -1px);
        opacity: 0.6;
      }
      55% {
        transform: translate(-2px, -2px);
        opacity: 0.9;
      }
      65% {
        transform: translate(1px, 3px);
        opacity: 0.4;
      }
      75% {
        transform: translate(-4px, 0px);
        opacity: 0.7;
      }
      85% {
        transform: translate(3px, -3px);
        opacity: 0.5;
      }
      95% {
        transform: translate(-1px, 1px);
        opacity: 0.3;
      }
    }

    @keyframes glitch-2 {
      0%, 100% {
        transform: translate(0);
        opacity: 0;
      }
      12% {
        transform: translate(2px, -1px);
        opacity: 0.4;
      }
      24% {
        transform: translate(-2px, 3px);
        opacity: 0.6;
      }
      36% {
        transform: translate(3px, 1px);
        opacity: 0.3;
      }
      48% {
        transform: translate(-1px, -3px);
        opacity: 0.7;
      }
      60% {
        transform: translate(1px, 2px);
        opacity: 0.5;
      }
      72% {
        transform: translate(-3px, -1px);
        opacity: 0.8;
      }
      84% {
        transform: translate(2px, 2px);
        opacity: 0.4;
      }
      96% {
        transform: translate(-1px, -1px);
        opacity: 0.2;
      }
    }
  `
})
export class SpecialCardComponent {
  @Input() imgName: string;
  @Input() layerName: string;
  @Input() cardText: string;
  @Input() footer: string;
  @Input() cardId: number; // Para identificar individualmente la card cuando haya varias
  @Input() isBorderChromatic: boolean = false;
  // Los colores de los bordes cromaticos
  @Input() color1: string = 'rgba(255, 0, 255, 0.5)';
  @Input() color2: string = 'rgba(0, 255, 255, 0.5)';
  @Input() color3: string = 'rgba(255, 255, 0, 0.5)';

  @Input() hasGlitchEffect: boolean = false; // Para saber si se debe aplicar el efecto glitch a la imagen al cliquearla
  // Estado interno para manejar el efecto glitch al hacer clic en la imagen (swap de imagen)
  internalGlitchState: boolean = false;

  // Evento de salida que emitira cuando se haga clic en la imagen
  @Output() imageClick: EventEmitter<{ cardId: number }> = new EventEmitter<{ cardId: number }>();

  constructor() {
    this.imgName = 'imageName.extension';
    this.layerName = 'Insert layer name here';
    this.cardText = 'Insert text here';
    this.footer = 'Insert footer here 00/00/0000';
    this.cardId = -1; // Valor por defecto si no se proporciona
  }

  // Función que se ejecutara cuando se haga clic en la imagen
  onImageClick(): void {
    // Si el efecto glitch está habilitado, iniciar el efecto inmediatamente
    if (this.hasGlitchEffect) {
      if (!this.internalGlitchState) {
        this.startGlitchEffect();
        console.log("Glitch effect started for card ID:", this.cardId);
      }
    }

    // Emitir el evento con el callback para actualizar la imagen
    this.imageClick.emit({
      cardId: this.cardId
    });
  }

  private startGlitchEffect(): void {
    this.internalGlitchState = true;

    // Desactivar el efecto después de la duración de la animación
    setTimeout(() => {
      this.internalGlitchState = false;
    }, 800); // Duración total del efecto glitch
  }
}
