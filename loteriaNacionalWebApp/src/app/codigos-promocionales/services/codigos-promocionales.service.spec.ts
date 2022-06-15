import { TestBed } from '@angular/core/testing';

import { CodigosPromocionalesService } from './codigos-promocionales.service';

describe('CodigosPromocionalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodigosPromocionalesService = TestBed.get(CodigosPromocionalesService);
    expect(service).toBeTruthy();
  });
});
