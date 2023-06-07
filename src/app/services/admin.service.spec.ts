import { TestBed } from '@angular/core/testing';

import { AdminservService } from './admin.service';

describe('UserservService', () => {
  let service: AdminservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
