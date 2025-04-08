import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() data: {img: string, title: string, txt: string, router: string, alt: string} = {
    img: "",
    title: "",
    txt: "",
    router: "",
    alt: ""
  }
}
