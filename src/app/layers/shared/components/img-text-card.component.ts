import { Component, Input } from '@angular/core';
/** 
Una Card normal que contiene una imagen y texto
**/
@Component({
  selector: 'app-img-text-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card mx-auto">
      <div class="row g-0">
        <div class="col-md-7">
            <img [src]="'/assets/images/layers/'+layerName.toLocaleLowerCase()+'/'+imgName"
                class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <p class="card-text"
              [innerHTML]="cardText"
            ></p>
            <footer class="blockquote-footer">{{footer}}</footer>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ImgTextCardComponent {
  @Input() imgName: string;
  @Input() layerName: string;
  @Input() cardText: string;
  @Input() footer: string;
  constructor() {
    this.imgName = 'imageName.extension';
    this.layerName = 'Insert layer name here';
    this.cardText = 'Insert text here';
    this.footer = 'Insert footer here 00/00/0000'

  }
}
