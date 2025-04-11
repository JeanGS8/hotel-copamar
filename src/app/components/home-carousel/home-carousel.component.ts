import { Component, DoCheck, Input, OnChanges, OnInit, signal, SimpleChanges, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  imports: [],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent implements OnChanges{
  @Input() images: string[] = [];
  interval: WritableSignal<number> = signal(0)

  ngOnChanges(): void {
    this.interval.set(2500)
  }
}
