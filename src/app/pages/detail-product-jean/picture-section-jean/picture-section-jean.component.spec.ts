import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSectionJeanComponent } from './picture-section-jean.component';

describe('PictureSectionJeanComponent', () => {
  let component: PictureSectionJeanComponent;
  let fixture: ComponentFixture<PictureSectionJeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureSectionJeanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureSectionJeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
