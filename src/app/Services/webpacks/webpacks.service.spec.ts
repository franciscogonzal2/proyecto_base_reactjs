import { TestBed, inject } from '@angular/core/testing';

import { WebpacksService } from './webpacks.service';

describe('WebpacksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebpacksService]
    });
  });

  it('should be created', inject([WebpacksService], (service: WebpacksService) => {
    expect(service).toBeTruthy();
  }));
});
