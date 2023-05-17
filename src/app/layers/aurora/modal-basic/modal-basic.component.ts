import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {

  text = 'Hola, veo que ha sido un largo viaje, tómate tu tiempo para descansar. Aunque las cosas a veces pueden ponerse difíciles, el mundo es colorido. Toma un descanso, reflexiona y continúa. Mis mejores deseos para ti.'; //Este es el texto que se escribirá lentamente
  typingSpeed = 50;
  currentIndex = 0;
  myDocument: any; //El #document 

  constructor(private modalService: NgbModal, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.myDocument = this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.elementRef.nativeElement))))));
  }

  openModal(content: any) {
    this.modalService.open(content, { fullscreen: true, windowClass: 'dark-modal' }).result.then(
      () => {
        this.currentIndex = 0;
      },
      () => {
        this.currentIndex = 0;
      }
    )
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
