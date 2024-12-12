import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAjoutComponent } from './user-ajout.component';

describe('UserAjoutComponent', () => {
  let component: UserAjoutComponent;
  let fixture: ComponentFixture<UserAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAjoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
