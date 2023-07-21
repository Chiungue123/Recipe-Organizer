import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  getRecipe(id: number): Observable<Recipe> {
    console.log("getRecipe() called with data", id);
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
  }

  getRecipes(): Observable<Recipe[]> {
    console.log("getRecipes() called with data");
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    console.log("addRecipe() called with data", recipe["name"], recipe["ingredients"], recipe["instructions"]);
    return this.http.post<Recipe>('http://localhost:3000/recipes', recipe);
  }
}
