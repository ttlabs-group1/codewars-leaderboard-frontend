import { TestBed } from '@angular/core/testing';

import { LocalLeaderboardService } from './local-leaderboard.service';

describe('LocalLeaderboardService', () => {
  let service: LocalLeaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalLeaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
