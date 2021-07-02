import { TestBed } from '@angular/core/testing';

import { FicheConditionnementService } from './fiche-conditionnement.service';

describe('FicheConditionnementService', () => {
  let service: FicheConditionnementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheConditionnementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
