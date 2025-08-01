import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="spinner-border" 
      [style.color]="color"
      [style.width]="size"
      [style.height]="size"
      [style.border-width]="borderWidth"
      role="status" 
      [attr.aria-label]="label">
      <span class="visually-hidden">{{ label }}...</span>
    </div>
  `,
  styles: [`
    .spinner-border {
      display: inline-block;
      animation-duration: var(--bs-spinner-animation-speed, 0.75s);
    }
  `]
})
export class SpinnerComponent {
  @Input() color: string = 'rgb(255, 0, 0)'; // Color rojo por defecto
  @Input() size: string = '2.5rem'; // Tamaño por defecto (Bootstrap usa rem)
  @Input() borderWidth: string = '0.25em'; // Grosor del borde por defecto
  @Input() label: string = 'Loading'; // Texto para accesibilidad
}
