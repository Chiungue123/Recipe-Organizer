import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) { }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
  }

  getRecipes(): Observable<Recipe[]> {
    console.log("getRecipes() called with data");
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  getFavourites(): Observable<Recipe[]> {
    console.log("getFavourites() called");
    return this.http.get<Recipe[]>('http://localhost:3000/recipes?favourite=true');
    /*return this.getRecipes().pipe(
      switchMap(() => {
        return of(this.recipes.filter(
          recipe => recipe.favourite === true
        ));
      }),tap(values => console.log("Favourites: " + values))
    );*/
  }

  toggleFavourite(id: number, favourite: boolean): Observable<Recipe> {
    console.log("toggleFavourite(), id: ", id, "Before = " , favourite);
    return this.http.patch<Recipe>(`http://localhost:3000/recipes/${id}`, {favourite: !favourite});  
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    console.log("addRecipe() called with data", recipe["name"], recipe["ingredients"], recipe["instructions"]);
    return this.http.post<Recipe>('http://localhost:3000/recipes', recipe);
  }

  refreshData(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes').pipe(
      tap(data => this.recipes = data)
    );
  }
  
  // Filter recipes by the search term
  search(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      // if not search term, return empty Recipe array.
      console.log("Empty search term");
      return of([]);
    }
  
    console.log("Searching: ", term);
    return this.refreshData().pipe(
      switchMap(() => {
        return of(this.recipes.filter(
          recipe => recipe.name.toLowerCase().includes(term.toLowerCase())
        ));
      })
    );
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`http://localhost:3000/recipes/${id}`);
  }

  setRecipes(recipes: Recipe[]): Observable<Recipe[]> {
    return this.http.put<Recipe[]>('http://localhost:3000/recipes', recipes);
  }

}