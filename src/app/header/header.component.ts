import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  searchControl = new FormControl();
  filteredRecipes!: Observable<Recipe[]>;

  constructor (private recipeService: RecipeService, private router: Router) { }
  
  
  ngOnInit() {
    /*this.filteredRecipes = this.searchControl.valueChanges.pipe(
      filter(term => term.trim().length > 0), // ignore whitespace, only search if term is at least 1 character
      debounceTime(300),
      switchMap(value => this.recipeService.search(value)),
      tap(values => console.log("Number of Recipes with search: " + values.length))
    );*/
    this.filteredRecipes = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => value.trim().length > 0 ? this.recipeService.search(value) : of([])),
      tap(values => console.log("Number of matches: " + values.length))
    );
  }

  onClick(id: number) {
    console.log("Navigating to recipe details. Id: ", id);
    this.router.navigate(['/recipe', id]);
    this.searchControl.setValue('');
  }
}