import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanevaDashboardComponent } from './off-caneva-dashboard.component';

describe('OffCanevaDashboardComponent', () => {
  let component: OffCanevaDashboardComponent;
  let fixture: ComponentFixture<OffCanevaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffCanevaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffCanevaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
