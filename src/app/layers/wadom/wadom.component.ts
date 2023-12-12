import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-wadom',
  templateUrl: './wadom.component.html',
  styleUrls: ['./wadom.component.css']
})
export class WadomComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('Wadom');
   }

  ngOnInit(): void {
  }

}
