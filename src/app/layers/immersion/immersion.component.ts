import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-immersion',
  templateUrl: './immersion.component.html',
  styleUrls: ['./immersion.component.css']
})
export class ImmersionComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('Immersion');
   }

  ngOnInit(): void {
  }

}
