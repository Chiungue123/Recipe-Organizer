import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFavouritesComponent } from './recipe-favourites/recipe-favourites.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { FormVisibilityService } from './form-visibility.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeFormComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    RecipeFavouritesComponent,
    ViewRecipesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule
  ],
  providers: [RecipeService, FormVisibilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
