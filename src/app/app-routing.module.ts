import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFavouritesComponent } from './recipe-favourites/recipe-favourites.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipe-form', component: RecipeFormComponent },
  { path: 'recipe-card', component: RecipeCardComponent },
  { path: 'recipe-detail', component: RecipeDetailComponent },
  { path: 'recipe-favourites', component: RecipeFavouritesComponent },
  { path: 'view-recipes', component: ViewRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
