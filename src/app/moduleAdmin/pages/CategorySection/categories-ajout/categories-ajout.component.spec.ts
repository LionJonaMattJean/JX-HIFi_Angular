import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAjoutComponent } from './categories-ajout.component';

describe('CategoriesAjoutComponent', () => {
  let component: CategoriesAjoutComponent;
  let fixture: ComponentFixture<CategoriesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesAjoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
