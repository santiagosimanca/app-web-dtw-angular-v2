import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-burrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burrito.component.html',
  styleUrl: './burrito.component.css'
})
export class BurritoComponent {
  burritos = [
    {nombre: 'burrito de pollo', precio: 5},
    {nombre: 'burrito de res', precio: 6},
    {nombre: 'burrito vegetariano', precio: 4}
  ];
}
