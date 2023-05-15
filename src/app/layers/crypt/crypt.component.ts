import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit {

  body: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.body = this.renderer.parentNode(this.renderer.parentNode(this.elementRef.nativeElement));
    this.renderer.addClass(this.body, "error-page-bg");
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.body, "error-page-bg");
  }

}
