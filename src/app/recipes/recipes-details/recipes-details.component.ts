import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'],
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number

  constructor(private recipeService: RecipeService, private rout: ActivatedRoute) {}

  ngOnInit(): void {
    this.rout.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.recipe = this.recipeService.getRecipes(this.id)
      }
    )
  }

  onAddRecipeDetail() {
    this.recipeService.addIngredientToSL(this.recipe.ingredients);
  }
}
