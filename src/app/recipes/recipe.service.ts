import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients';
import { ShoppingListService } from '../shoping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelcted = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Delicious',
      'https://menunedeli.ru/wp-content/uploads/2023/07/4523862E-973D-49D0-BE99-2609DDAA5CF4-467x350.jpeg',
      [
        new Ingredients('Meat', 1),
        new Ingredients('Buns', 2),
        new Ingredients('Salad', 1),
      ]
    ),
  ];

  getRecipe(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientToSL(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
