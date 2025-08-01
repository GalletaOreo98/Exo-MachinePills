import { Component, ViewEncapsulation } from '@angular/core';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { TextCardComponent } from '../shared/components/text-card.component';
import { ImgCardComponent } from '../shared/components/img-card.component';
import { SpecialCardComponent } from '../shared/components/special-card-component';
import { SpinnerComponent } from '../shared/components/spinner.component';
import { layerBodyData, layerMainData } from '../shared/layers-data/wadom';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wadom',
  standalone: true,
  imports: [SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, TextCardComponent, ImgCardComponent, SpecialCardComponent, SpinnerComponent],
  templateUrl: './wadom.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './wadom.component.css'
})
export class WadomComponent {
  layerMainData = layerMainData;
  layerBodyData = layerBodyData;
  
  constructor(private title:Title) {
    this.title.setTitle(this.layerMainData.layerName);
  }
  
  handleSwapImageOnClickEvent(event: {cardId: number}){
    // Cambiar la imagen después de que el efecto glitch haya empezado
    setTimeout(() => {
      const currentImageName = this.layerBodyData[event.cardId].imageName;

      if (currentImageName.includes("original")) {
        this.layerBodyData[event.cardId].imageName = currentImageName.replace("original", "extra");
      } else if (currentImageName.includes("extra")) {
        this.layerBodyData[event.cardId].imageName = currentImageName.replace("extra", "original");
      }
    }, 300); // Cambio en el medio del efecto glitch
  }
}
