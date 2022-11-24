import { TestBed } from '@angular/core/testing';

import { LigasService } from './ligas.service';

describe('LigasService', () => {
  let service: LigasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
