import { TestBed } from '@angular/core/testing';

import { PrdapiService } from './prdapi.service';

describe('PrdapiService', () => {
  let service: PrdapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
