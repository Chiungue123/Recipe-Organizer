import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFavouritesComponent } from './recipe-favourites.component';

describe('RecipeFavouritesComponent', () => {
  let component: RecipeFavouritesComponent;
  let fixture: ComponentFixture<RecipeFavouritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeFavouritesComponent]
    });
    fixture = TestBed.createComponent(RecipeFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
