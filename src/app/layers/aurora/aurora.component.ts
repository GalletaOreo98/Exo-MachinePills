import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-aurora',
  templateUrl: './aurora.component.html',
  styleUrls: ['./aurora.component.css']
})
export class AuroraComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('Aurora');
   }

  ngOnInit(): void {
  }

}
