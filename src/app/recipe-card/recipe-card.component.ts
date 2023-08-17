import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe!: Recipe; // The recipe to display
  @Input() index!: number; // Index of recipe
  loading: boolean = true; // Loading flag
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false; // Set loading to false after 1 second
    }, 500 + this.index * 150); // 1-second delay plus 150ms delay per card (to stagger the loading)
  }

  onClickRecipe(id: number) {
    //console.log("Navigating to recipe details. Id: ", id)
    this.router.navigate(['/recipe', id]);
  }
}
