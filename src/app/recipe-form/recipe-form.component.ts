import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  recipeForm!: FormGroup;
  currentStep: number = 1;
  units: string[] = [
    'mL',
    'grams',
    'cups',
    'tablespoons',
    'teaspoons',
    'handfuls',
    // Add more units as needed
  ];
  

  constructor(private recipeService: RecipeService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    // Here we're creating a new FormGroup for the entire recipe.
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      ingredients: this.fb.array([this.onCreateIngredient()]),
      instructions: this.fb.array([this.onCreateInstruction()])
    });
  }

  onNext() {
    this.currentStep ++;
    this.changeSlide("next");
  }

  onPrevious() {
    this.currentStep --;
    this.changeSlide("previous");
  }

  changeSlide(direction: string) {
    // Update translation of slides container
    const slidesContainer = document.querySelector('.slides-container');
    const slideWidth = 800; // Width of individual slide
    console.log("Transform: ", `translateX(-${(this.currentStep - 1) * slideWidth}px)`);
    (slidesContainer as HTMLElement).style.transform = `translateX(-${(this.currentStep - 1) * slideWidth}px)`;
}

  onCreateIngredient(): FormGroup {
  // Here we're creating a new FormGroup for a single ingredient.
  // Each ingredient will have its own FormControl for 'name', 'amount', and 'unit
    return this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      unit: ['', Validators.required]
    });
  }

  onAddIngredient(): void {
    this.ingredients.push(this.onCreateIngredient());
  }

  onRemoveIngredient(index: number) {
    // Remove the selected ingredient from the ingredients FormArray
    this.ingredients.removeAt(index);
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onCreateInstruction(): FormGroup {
  // Here we're creating a new FormGroup for a single instruction.
  // Each instruction will have its own FormControl for 'step' and 'description'
    return this.fb.group({
      description: ['', Validators.required]
    });
  }

  onAddInstruction(): void {
    this.instructions.push(this.onCreateInstruction());
  }

  onRemoveInstruction(index: number) {
    // Remove the selected instruction from the instructions FormArray
    this.instructions.removeAt(index);
  }

  get instructions(): FormArray {
    return this.recipeForm.get('instructions') as FormArray;
  }

  onSubmit() {
    // When the form is submitted, we're logging the form's current value.
    console.log("Recipe Form Value: ", this.recipeForm.value);
    this.sub = this.recipeService.addRecipe(this.recipeForm.value).subscribe(
      (recipe: Recipe) => {
        console.log("Adding Recipe: ", recipe);
        this.router.navigate(['/view-recipes']);
      },
      (error: any) => {
        console.error('Error adding recipe: ', error);
      }
    )
  };

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
