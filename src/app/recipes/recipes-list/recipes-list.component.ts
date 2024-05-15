import { Component, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  link: string =
    'https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg';

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  addRecipeInTheList() {
    this.recipes.push(
      new Recipe('Test Recipe', 'This is just a test', this.link, [
        new Ingredients('Meat', 1),
        new Ingredients('French Fries', 30),
        new Ingredients('Souce', 1),
      ])
    );
  }
}
