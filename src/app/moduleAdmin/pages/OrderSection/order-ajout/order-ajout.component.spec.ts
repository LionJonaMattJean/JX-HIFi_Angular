import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAjoutComponent } from './order-ajout.component';

describe('OrderAjoutComponent', () => {
  let component: OrderAjoutComponent;
  let fixture: ComponentFixture<OrderAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderAjoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
