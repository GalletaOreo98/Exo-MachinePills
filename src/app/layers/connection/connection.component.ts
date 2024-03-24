import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeparatorComponent } from '../shared/components/separator.component';
import { LayerMainCardComponent } from '../shared/components/layer-main-card.component';
import { ImgTextCardComponent } from '../shared/components/img-text-card.component';
import { TextCardComponent } from '../shared/components/text-card.component';
import { layerMainData, layerBodyData } from "../shared/layers-data/connection";

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [SeparatorComponent, LayerMainCardComponent, ImgTextCardComponent, TextCardComponent],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {
  layerMainData = layerMainData;
  layerBodyData = layerBodyData;

  constructor(private title:Title) {
    this.title.setTitle(this.layerMainData.layerName);
   }
}
