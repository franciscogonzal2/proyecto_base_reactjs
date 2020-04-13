import { TestBed, inject } from '@angular/core/testing';

import { CarruselService } from './carrusel.service';

describe('CarruselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarruselService]
    });
  });

  it('should be created', inject([CarruselService], (service: CarruselService) => {
    expect(service).toBeTruthy();
  }));
});
