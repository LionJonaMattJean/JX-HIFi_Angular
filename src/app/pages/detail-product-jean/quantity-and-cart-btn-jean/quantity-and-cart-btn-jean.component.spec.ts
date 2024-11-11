import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityAndCartBtnJeanComponent } from './quantity-and-cart-btn-jean.component';

describe('QuantityAndCartBtnJeanComponent', () => {
  let component: QuantityAndCartBtnJeanComponent;
  let fixture: ComponentFixture<QuantityAndCartBtnJeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityAndCartBtnJeanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityAndCartBtnJeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
