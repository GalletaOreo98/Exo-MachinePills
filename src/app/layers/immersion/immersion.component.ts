import { Component, ViewEncapsulation } from '@angular/core';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { TextCardComponent } from '../shared/components/text-card.component';
import { ImgCardComponent } from '../shared/components/img-card.component';
import { layerBodyData, layerMainData } from '../shared/layers-data/immersion';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-immersion',
  standalone: true,
  imports: [SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, TextCardComponent, ImgCardComponent],
  templateUrl: './immersion.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './immersion.component.css'
})
export class ImmersionComponent {
  layerMainData = layerMainData;
  layerBodyData = layerBodyData;
  constructor(private title:Title) {
    this.title.setTitle(this.layerMainData.layerName);
  }
}
