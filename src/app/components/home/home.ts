import { Component, inject } from '@angular/core';
import { Shoes } from '../../core/shoes';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  private shoes = inject(Shoes);

  constructor() {
    this.shoes.getPrice()
      .subscribe(data => {
        console.log(data);
      })
  }
}
