import { TestBed } from '@angular/core/testing';

import { RemoteUserDetailService } from './remote-user-detail.service';

describe('RemoteUserDetailService', () => {
  let service: RemoteUserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteUserDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
