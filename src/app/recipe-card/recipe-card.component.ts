import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  // Input decorator allows us to pass data into this component
  @Input() recipe!: Recipe;
  ngOnChanges() {
    console.log(this.recipe);
  }
}
