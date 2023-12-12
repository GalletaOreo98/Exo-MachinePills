import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.css']
})
export class EssenceComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('Essence');
   }

  ngOnInit(): void {
  }

}
