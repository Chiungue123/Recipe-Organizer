import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  constructor(private recipeService: RecipeService) { }

  name: string = '';
  description: string = '';
  ingredients: string[] = [];
  instructions: string = '';

  onSubmit() {
    let newRecipe = new Recipe (this.name, this.description, this.ingredients, this.instructions);
    this.recipeService.addRecipe(newRecipe)
    alert("Recipe added!")
    /*let newRecipe = new Recipe (this.name, this.description, this.ingredients, this.instructions);
    this.recipeService.addRecipe(newRecipe);*/
  };
  
  
  /*onSubmit() {
    newRecipe!: Recipe = {
      this.name = name;
      this.description = description;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }; 
  }*/ 

}
