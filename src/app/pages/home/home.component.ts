import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent, HomeCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
