import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteCategorieComponent } from './carte-categorie.component';

describe('CarteCategorieComponent', () => {
  let component: CarteCategorieComponent;
  let fixture: ComponentFixture<CarteCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
