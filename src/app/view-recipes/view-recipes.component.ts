import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})

export class ViewRecipesComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.sub = this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      console.log("local recipes from ngOnInit: ", recipes)
    },
    (error) => {
      alert("Error getting recipes from ngOnInit")
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
