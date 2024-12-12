import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLinkDashboardComponent } from './action-link-dashboard.component';

describe('ActionLinkDashboardComponent', () => {
  let component: ActionLinkDashboardComponent;
  let fixture: ComponentFixture<ActionLinkDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionLinkDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionLinkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
