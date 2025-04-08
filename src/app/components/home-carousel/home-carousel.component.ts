import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  imports: [],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  @Input() images: string[] = [];
  @Input() interval: number = 0;
}
