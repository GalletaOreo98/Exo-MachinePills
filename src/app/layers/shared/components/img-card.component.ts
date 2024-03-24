import { Component, Input } from '@angular/core';

/** 
Una Card normal que contiene solo una imagen
**/
@Component({
  selector: 'app-img-card',
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
              <footer class="blockquote-footer">{{footer}}</footer>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ImgCardComponent {
  @Input() imgName: string;
  @Input() layerName: string;
  @Input() footer: string;
  constructor() {
    this.imgName = 'imageName.extension';
    this.layerName = 'Insert layer name here';
    this.footer = 'Insert footer here 00/00/0000'

  }
}
