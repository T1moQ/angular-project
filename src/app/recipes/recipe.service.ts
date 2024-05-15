import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelcted = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [];

  getRecipe(): Recipe[] {
    return this.recipes.slice();
  }
}
