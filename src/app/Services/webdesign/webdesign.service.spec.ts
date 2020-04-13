import { TestBed, inject } from '@angular/core/testing';

import { WebdesignService } from './webdesign.service';

describe('WebdesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebdesignService]
    });
  });

  it('should be created', inject([WebdesignService], (service: WebdesignService) => {
    expect(service).toBeTruthy();
  }));
});
