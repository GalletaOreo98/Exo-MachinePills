import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ether',
  templateUrl: './ether.component.html',
  styleUrls: ['./ether.component.css']
})
export class EtherComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('Ether');
   }

  ngOnInit(): void {
  }

}
