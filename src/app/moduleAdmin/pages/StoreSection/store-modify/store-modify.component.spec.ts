import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModifyComponent } from './store-modify.component';

describe('StoreModifyComponent', () => {
  let component: StoreModifyComponent;
  let fixture: ComponentFixture<StoreModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
