import { Component, Input } from '@angular/core';
/** 
Una Card normal que contiene solo texto
**/
@Component({
  selector: 'app-text-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card mx-auto">
      <div class="card-body">
        <blockquote class="blockquote mb-0 card-text">
          <p
            [innerHTML]="cardText"
          ></p>
          <footer class="blockquote-footer">{{footer}}</footer>
        </blockquote>
      </div>
    </div>
  `,
  styles: ``
})
export class TextCardComponent {
  @Input() cardText: string;
  @Input() footer: string;
  constructor() {
    this.cardText = 'Insert text here';
    this.footer = 'Insert footer here 00/00/0000'
  }
}
