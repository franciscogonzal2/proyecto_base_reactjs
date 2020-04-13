import { TestBed, inject } from '@angular/core/testing';

import { PortafolioService } from './portafolio.service';

describe('PortafolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortafolioService]
    });
  });

  it('should be created', inject([PortafolioService], (service: PortafolioService) => {
    expect(service).toBeTruthy();
  }));
});
