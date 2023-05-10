import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
    /* this.renderer.addClass(document.body, "testeoclass"); */
  }

  ngOnInit(): void {
    const body = this.renderer.parentNode(this.renderer.parentNode(this.elementRef.nativeElement));
    console.log(body);
    this.renderer.addClass(body, "error-page-bg");
  }

}
