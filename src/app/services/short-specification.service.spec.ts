import { TestBed } from '@angular/core/testing';

import { ShortSpecificationService } from './short-specification.service';

describe('ShortSpecificationService', () => {
  let service: ShortSpecificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortSpecificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
