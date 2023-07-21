import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  // Input decorator allows us to pass data into this component
  @Input() recipe!: Recipe;

  constructor(private router: Router) { }

  ngOnChanges() {
    console.log(this.recipe);
  }

  onClickRecipe(id: number) {
    console.log("Navigating to recipe details. Id: ", id)
    this.router.navigate(['/recipe', id]);
  }
}
