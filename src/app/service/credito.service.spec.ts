import { TestBed } from '@angular/core/testing';

import { CreditosService } from '../service/credito.service';

describe('CreditoService', () => {
  let service: CreditosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
