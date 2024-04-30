import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelcted = new EventEmitter<Recipe>()
  recipes: Recipe[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addRecipeInTheList() {
    this.recipes.push(new Recipe('Test Recipe', 'This is just a test', 'https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg'))
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelcted.emit(recipe)
  }

}
