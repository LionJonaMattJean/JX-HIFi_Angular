import { TestBed } from '@angular/core/testing';

import { CallSupportService } from './call-support.service';

describe('CallSupportService', () => {
  let service: CallSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
