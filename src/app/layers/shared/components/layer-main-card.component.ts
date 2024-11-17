import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layer-main-card',
  standalone: true,
  imports: [],
  template: `
    <div class="d-none d-sm-none d-md-none d-lg-block mt-4"></div>

    <div class="card mx-auto">
        <div class="row g-0">
            <div class="col-md-7">
              <div [style]="{'aspect-ratio': imgWidth + '/' + imgHeight}" class="placeholder-img rounded-start">
                <img [src]="'/assets/images/layers/'+layerName.toLocaleLowerCase()+'/'+layerImgName"
                    class="img-fluid rounded-start" 
                    alt="layer main image"
                    (load)="onImageLoad()"
                >
              </div>  
            </div>
            <div class="col-md-5">
                <div class="card-body">
                    <h1 class="card-title">{{layerName}}</h1>
                    <p class="card-text"
                      [innerHTML]="layerText"
                    ></p>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: ``
})
export class LayerMainCardComponent {
  @Input() layerImgName: string;
  @Input() layerName: string;
  @Input() layerText: string;
  @Input() imgWidth: number;
  @Input() imgHeight: number;

  constructor() {
    //Default values
    this.layerImgName = 'imageName.extension';
    this.layerName = 'Insert layer name here';
    this.layerText = 'Insert text here';
    this.imgWidth = 0;
    this.imgHeight = 0;
  }

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
