import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLionComponent } from './login-lion.component';

describe('LoginLionComponent', () => {
  let component: LoginLionComponent;
  let fixture: ComponentFixture<LoginLionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
