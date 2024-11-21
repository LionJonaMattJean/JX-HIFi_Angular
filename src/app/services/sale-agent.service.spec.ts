import { TestBed } from '@angular/core/testing';

import { SaleAgentService } from './sale-agent.service';

describe('SaleAgentService', () => {
  let service: SaleAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
