import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  template: `
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
      <h1 class="error-text">Error 404</h1>
    </div>
  `,
  styles: `
    .error-text {
      -webkit-text-stroke: 1px rgb(255, 252, 229); /* ancho del borde y color */
      color: red;
      font-size: 5rem;
    }
  `
})
export default class ErrorPageComponent implements OnInit{
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
    /* this.renderer.addClass(document.body, "testeoclass"); */
  }

  ngOnInit(): void {
    const body = this.renderer.parentNode(this.renderer.parentNode(this.elementRef.nativeElement));
    console.log(body);
    this.renderer.addClass(body, "error-page-bg");
  }
}
