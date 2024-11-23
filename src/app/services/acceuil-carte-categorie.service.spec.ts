import { TestBed } from '@angular/core/testing';

import { AcceuilCarteCategorieService } from './acceuil-carte-categorie.service';

describe('AcceuilCarteCategorieService', () => {
  let service: AcceuilCarteCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuilCarteCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
