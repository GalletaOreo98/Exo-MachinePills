import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { TextCardComponent } from '../shared/components/text-card.component';
import { layerMainData, layerBodyData } from "../shared/layers-data/aurora";
import { ImgCardComponent } from '../shared/components/img-card.component';

@Component({
  selector: 'app-aurora',
  standalone: true,
  imports: [ModalBasicComponent, SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, TextCardComponent, ImgCardComponent],
  templateUrl: './aurora.component.html',
  styleUrl: './aurora.component.css'
})
export class AuroraComponent {
  layerMainData = layerMainData;
  layerBodyData = layerBodyData;
  constructor(private title:Title) {
    this.title.setTitle(this.layerMainData.layerName);
  }
}
