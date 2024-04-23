import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 10),
    new Ingredients('Tomatos', 5)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
