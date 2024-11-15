import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilLionComponent } from './acceuil-lion.component';

describe('AcceuilLionComponent', () => {
  let component: AcceuilLionComponent;
  let fixture: ComponentFixture<AcceuilLionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilLionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
