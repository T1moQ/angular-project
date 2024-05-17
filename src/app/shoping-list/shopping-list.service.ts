import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 10),
    new Ingredients('Tomatos', 5),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredients: Ingredients) {
    this.ingredients.push(ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onIngredientRemove() {
    this.ingredients.pop();
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onIngredientClear() {
    this.ingredientsChanged.emit((this.ingredients = []));
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
