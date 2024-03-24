import { Component, Input } from '@angular/core';

/**
Separador entre main layer image y el contenido del layer 
**/
@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [],
  template: `
    <br>
    <div class="d-block d-sm-block d-md-block d-lg-none mb-4">
        <div class="separator">
            <span class="symbol" [style]="'color:'+separatorColor">{{separatorSymbol}}</span>
            <span class="dash" [style]="'background-color: '+separatorColor"></span>
            <span class="symbol" [style]="'color:'+separatorColor">{{separatorSymbol}}</span>
        </div>
    </div>

    <div class="d-none d-sm-none d-md-none d-lg-block separator-container">
        <div class="separator">
            <span class="symbol" [style]="'color: '+separatorColor">{{separatorSymbol}}{{separatorSymbol}}</span>
            <span class="dash" [style]="'background-color: '+separatorColor"></span>
            <span class="symbol" [style]="'color: '+separatorColor">{{separatorSymbol}}{{separatorSymbol}}</span>
        </div>
    </div>
    <br>
  `,
  
})

export class SeparatorComponent {
  @Input() separatorSymbol: string;
  @Input() separatorColor: string;

  constructor() {
    this.separatorSymbol = 'XXXXXX';
    this.separatorColor = '#414141'
  }
}
