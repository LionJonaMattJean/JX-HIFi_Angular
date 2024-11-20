import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDashboardComponent } from './pagination-dashboard.component';

describe('PaginationDashboardComponent', () => {
  let component: PaginationDashboardComponent;
  let fixture: ComponentFixture<PaginationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
