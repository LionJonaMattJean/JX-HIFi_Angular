import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCarteComponent } from './store-carte.component';

describe('StoreCarteComponent', () => {
  let component: StoreCarteComponent;
  let fixture: ComponentFixture<StoreCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreCarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
