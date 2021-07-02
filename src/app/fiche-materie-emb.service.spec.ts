import { TestBed } from '@angular/core/testing';

import { FicheMaterieEmbService } from './fiche-materie-emb.service';

describe('FicheMaterieEmbService', () => {
  let service: FicheMaterieEmbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheMaterieEmbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
