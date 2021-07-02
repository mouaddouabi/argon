import { TestBed } from '@angular/core/testing';

import { FicheReceptionService } from './fiche-reception.service';

describe('FicheReceptionService', () => {
  let service: FicheReceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheReceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
