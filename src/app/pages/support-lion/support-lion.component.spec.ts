import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLionComponent } from './support-lion.component';

describe('SupportLionComponent', () => {
  let component: SupportLionComponent;
  let fixture: ComponentFixture<SupportLionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportLionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
