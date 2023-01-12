import { TestBed } from '@angular/core/testing';

import { LocalUserDetailService } from './local-user-detail.service';

describe('LocalUserDetailService', () => {
  let service: LocalUserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUserDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
