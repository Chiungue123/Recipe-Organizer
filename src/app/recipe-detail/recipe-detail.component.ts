import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { Recipe, Ingredient, Instruction } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  sub!: Subscription;
  recipe: Recipe = new Recipe(0,'', '', [], []);
  
  id!: number;
  image: string = "";
  name!: string;
  ingredients!: Ingredient[];
  instructions!: Instruction[];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("Initializing recipe-detail component")
    this.sub = this.route.params.subscribe(
      (params: any) => {
        this.id = +params['id']; // The '+' sign converts the string to a number
        console.log("Id: ", this.id)
      },
      (error: any) => {
        console.log("Error getting recipe details from ngOnInit")
        console.log(error);
      }
    );

     this.sub = this.recipeService.getRecipe(this.id).subscribe((recipe: Recipe) => {
        this.recipe = recipe;
        console.log("Extracted recipe from recipe-detail: ", recipe["name"])
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEdit() {
    console.log("Editing recipe with id: ", this.id)
  }

  onDelete() {
    console.log("Deleting recipe with id: ", this.id)
  }

  onFavourite(){
    console.log("Favorite recipe with id: ", this.id)
  }

}