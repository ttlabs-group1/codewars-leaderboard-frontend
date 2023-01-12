import { TestBed } from '@angular/core/testing';

import { RemoteLeaderboardService } from './remote-leaderboard.service';

describe('RemoteLeaderboardService', () => {
  let service: RemoteLeaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteLeaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
