import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsDetailComponent } from './produits-detail.component';

describe('ProduitsDetailComponent', () => {
  let component: ProduitsDetailComponent;
  let fixture: ComponentFixture<ProduitsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
