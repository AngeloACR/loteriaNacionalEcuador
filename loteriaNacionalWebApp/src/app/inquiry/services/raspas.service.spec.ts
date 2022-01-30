import { TestBed } from '@angular/core/testing';

import { RaspasService } from './raspas.service';

describe('RaspasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaspasService = TestBed.get(RaspasService);
    expect(service).toBeTruthy();
  });
});
