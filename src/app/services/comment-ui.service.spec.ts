import { TestBed } from '@angular/core/testing';

import { CommentUiService } from './comment-ui.service';

describe('CommentUiService', () => {
  let service: CommentUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
