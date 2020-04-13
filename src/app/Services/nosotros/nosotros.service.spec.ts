import { TestBed, inject } from '@angular/core/testing';

import { NosotrosService } from './nosotros.service';

describe('NosotrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NosotrosService]
    });
  });

  it('should be created', inject([NosotrosService], (service: NosotrosService) => {
    expect(service).toBeTruthy();
  }));
});
