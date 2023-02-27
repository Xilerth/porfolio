import { Component, Input } from '@angular/core';

@Component({
  selector: 'xilerth-porfolio-card',
  templateUrl: './porfolio-card.component.html',
  styleUrls: ['./porfolio-card.component.scss']
})
export class PorfolioCardComponent {

  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() image: string  = 'https://via.placeholder.com/150';

  constructor() { }

}
