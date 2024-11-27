import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-info-card',
  standalone: true,
  imports: [],
  templateUrl: './my-info-card.component.html',
  styleUrl: './my-info-card.component.css'
})
export class MyInfoCardComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() {}

  sendCloseEvent() {
    this.closeEvent.emit(false);
  }

}

