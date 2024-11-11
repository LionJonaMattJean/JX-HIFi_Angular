import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterJeanComponent } from './product-filter-jean.component';

describe('ProductFilterJeanComponent', () => {
  let component: ProductFilterJeanComponent;
  let fixture: ComponentFixture<ProductFilterJeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterJeanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFilterJeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
