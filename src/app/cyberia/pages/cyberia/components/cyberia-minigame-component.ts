import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
/** 
Una Card que contiene una imagen y texto de un minigame de Cyberia
**/
@Component({
  selector: 'app-cyberia-minigame',
  standalone: true,
  imports: [RouterModule],
  template: `
    <hr class="mx-auto" style="max-width: 58rem;">
    <div class="card card-cyberia-minigame mx-auto" style="cursor: pointer;"  [routerLink]="'/cyberia'+gameUrl">
      <div class="row g-0">
        <div class="col-md-4">
            <img [src]="'/assets/images/cyberia/products/'+imgName"
                class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body pb-0">
          <h5 class="card-title"
            [innerHTML]="cardTitle"
          >   
          </h5>
            <p class="card-text"
              [innerHTML]="cardText"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <hr class="mx-auto" style="max-width: 58rem;">
  `,
  styles: [`
  .card-cyberia-minigame {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .card-cyberia-minigame:hover {
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`]
})
export class CyberiaMinigameComponent {
  @Input() imgName: string;
  @Input() cardText: string;
  @Input() cardTitle: string;
  @Input() gameUrl: string;  
  constructor() {
    this.imgName = 'imageName.extension';
    this.cardText = 'Insert text here';
    this.cardTitle = 'Insert title here';
    this.gameUrl = '/error';
  }

}
