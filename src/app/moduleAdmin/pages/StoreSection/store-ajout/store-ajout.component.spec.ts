import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAjoutComponent } from './store-ajout.component';

describe('StoreAjoutComponent', () => {
  let component: StoreAjoutComponent;
  let fixture: ComponentFixture<StoreAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreAjoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
