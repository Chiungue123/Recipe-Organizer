import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  addRecipe(recipe: Recipe) {
    this.http.post('http://localhost:3000/recipes', recipe);
  }
}
