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
  recipe: Recipe = new Recipe(false, 0, 0, 0, 0,'', '', [], []);
  
  favourite!: boolean;
  id!: number;
  image: string = "";
  name!: string;
  ingredients!: Ingredient[];
  instructions!: Instruction[];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("Recipe Detail ngOnInit called")
    this.sub = this.route.params.subscribe(
      (params: any) => {
        this.id = +params['id']; // The '+' sign converts the string to a number
      },
      (error: any) => {
        console.log("Error getting recipe details from ngOnInit")
        console.log(error);
      }
    );

     this.sub = this.recipeService.getRecipe(this.id).subscribe((recipe: Recipe) => {
        this.recipe = recipe;
        //console.log("Favourite = ", recipe["favourite"]);
        this.favourite = recipe["favourite"];
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onUpdate() {
    console.log("Editing recipe with id: ", this.id)
  }

  onDelete(id: number) {
    if (!confirm("Are you sure you want to delete this recipe?")) {
      return;
    }
    else{
      alert("Deleting recipe with id: " + id)
    }
    console.log("Deleting recipe with id: ", this.id)
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.recipeService.getRecipes().subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
    });
  }

  onFavourite(id: number){
    const recipe = this.recipeService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe
      const favourite = recipe.favourite;
      //console.log("onFavourite called, id: ", id , " Favourite: ", favourite)
      this.recipeService.toggleFavourite(id, favourite).subscribe(updatedRecipe => {
        this.recipe = updatedRecipe
        //console.log("Favourite updated to: ", updatedRecipe.favourite)
          this.favourite = updatedRecipe.favourite
      })
    });
  }
}