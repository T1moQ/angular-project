import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }

  onIngredientsClear() {
    this.shoppingListService.onIngredientClear();
  }

  onIngredientsRemove() {
    this.shoppingListService.onIngredientRemove();
  }
}
