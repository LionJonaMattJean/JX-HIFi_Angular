import { TestBed } from '@angular/core/testing';

import { SpecificationDetailsService } from './specification-details.service';

describe('SpecificationDetailsService', () => {
  let service: SpecificationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
