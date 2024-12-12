import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListJeanComponent } from './product-list-jean.component';

describe('ProductListJeanComponent', () => {
  let component: ProductListJeanComponent;
  let fixture: ComponentFixture<ProductListJeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListJeanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListJeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
