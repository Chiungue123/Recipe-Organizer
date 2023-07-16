import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipes: Recipe[] = []
  // Initialize a new recipe
  newRecipe: Recipe = {
    name: 'name',
    description: 'description',
    ingredients: ['ingredients', 'ingredients'],
    instructions: 'instructions',
  };

  ngOnInit() {
    this.recipes.push(this.newRecipe);
  }
  
  constructor() { }

}
