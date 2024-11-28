import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-info-card',
  standalone: true,
  imports: [],
  templateUrl: './my-info-card.component.html',
  styleUrl: './my-info-card.component.css'
})
export class MyInfoCardComponent implements AfterViewInit {
  @Output() closeEvent = new EventEmitter<boolean>();
  @ViewChild('modalOverlay') modalOverlay!: ElementRef;
  @ViewChild('modalContent') modalContent!: ElementRef;
  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.modalContent.nativeElement, 'fade-in');
    this.renderer.addClass(this.modalOverlay.nativeElement, 'fade-in');
  }

  sendCloseEvent() {
    this.fadeOut();
    setTimeout(() => this.closeEvent.emit(false), 400);
  }

  fadeOut() {
    this.renderer.addClass(this.modalContent.nativeElement, 'fade-out');
    this.renderer.addClass(this.modalOverlay.nativeElement, 'fade-out');
  }

}

