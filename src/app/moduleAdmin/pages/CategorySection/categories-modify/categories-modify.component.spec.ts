import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesModifyComponent } from './categories-modify.component';

describe('CategoriesModifyComponent', () => {
  let component: CategoriesModifyComponent;
  let fixture: ComponentFixture<CategoriesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
