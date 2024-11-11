import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDescriptionProductJeanComponent } from './quick-description-product-jean.component';

describe('QuickDescriptionProductJeanComponent', () => {
  let component: QuickDescriptionProductJeanComponent;
  let fixture: ComponentFixture<QuickDescriptionProductJeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickDescriptionProductJeanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickDescriptionProductJeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
