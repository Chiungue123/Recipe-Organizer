import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-favourites',
  templateUrl: './recipe-favourites.component.html',
  styleUrls: ['./recipe-favourites.component.css']
})
export class RecipeFavouritesComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.sub = this.recipeService.getFavourites().subscribe((recipes) => {
      this.recipes = recipes;
      console.log("Recipe Favourites: ", recipes);
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
