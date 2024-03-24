import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-basic',
  standalone: true,
  imports: [],
  template: `
    <ng-template #content let-modal>
	    <div class="modal-body">
	    	<div class="d-flex justify-content-center">
          <img src="/assets/images/campfire.gif" alt="" class="col-12 col-md-6 col-lg-5">
        </div>
        <br>
        <div class="d-flex justify-content-center">
            <p id="typingText" class="col-12 col-md-6 col-lg-5"></p>
        </div>
	    </div>
	    <div class="modal-footer">
	    	<button type="button" ngbAutofocus  class="btn btn-outline-dark save-btn" (click)="modal.close()">Continuar</button>
	    </div>
    </ng-template>

    <button class="btn btn-lg btn-outline-primary aurora-btn" (click)="openModal(content)">Toma un descanso</button>
  `,
  styles: `
    .save-btn {
        color: #ffffff;
        border-color: #ffffff;
    }
    .save-btn:hover {
        background-color: #A44326;
    }
    
    .aurora-btn {
        color: #E9AFA4;
        border-color: #E9AFA4;
    }
    
    .aurora-btn:hover {
        background-color: #E9AFA4;
        color: #ffffff;
    }
    
    .aurora-btn:active {
        background-color: #E9AFA4;
        color: #ffffff;
        border-color: #E9AFA4;
    }
    
    .aurora-btn:focus {
        background-color: #E9AFA4;
        color: #ffffff;
        border-color: #E9AFA4;
        box-shadow: none;
    }`
})

export class ModalBasicComponent implements OnInit {

  text = 'Hola, veo que ha sido un largo viaje, tómate tu tiempo para descansar. Aunque las cosas a veces pueden ponerse difíciles, el mundo es colorido. Toma un descanso, reflexiona y continúa. Mis mejores deseos para ti.'; //Este es el texto que se escribirá lentamente
  typingSpeed = 50;
  currentIndex = 0;
  myDocument: any; //El #document 
  audio: HTMLAudioElement;

  constructor(private modalService: NgbModal, private renderer: Renderer2, private elementRef: ElementRef) { 
    this.audio = new Audio();
    this.audio.src = '/assets/audio/campfire.mp3';
    this.audio.loop = true;
   }

  ngOnInit(): void {
    this.myDocument = this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.elementRef.nativeElement))))));
  }

  openModal(content: any) {
    this.modalService.open(content, { fullscreen: true, windowClass: 'dark-modal' }).result.then(
      () => {
        this.currentIndex = 0;
        this.audio.pause();
      },
      () => {
        this.currentIndex = 0;
        this.audio.pause();
      }
    )
    this.audio.play();
    this.typeText();
  }

  typeText() {
    const typingElement = this.myDocument.getElementById('typingText');
    if (!typingElement) return;
    typingElement.textContent += this.text[this.currentIndex];
    this.currentIndex++;
    if (this.currentIndex < this.text.length) {
      setTimeout(() => { this.typeText() }, this.typingSpeed);
    }
  }
}

