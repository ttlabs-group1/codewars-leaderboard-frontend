import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Comment } from '../models/comment.model';
import { Response } from '../models/response.model';
import { UserDetail } from '../models/user-detail.model';
import { UserDetailService } from './user-detail.service';
import { createObservable } from './utilities';

@Injectable()
export class LocalUserDetailService implements UserDetailService {
  private static readonly COMMENTS: string[] = [
    'This is some awesome thinking!',
    "What terrific math skills you're showing!",
    'You are an amazing writer!',
    'Wow! You have improved so much!',
    'Nice idea!',
    'You are showing excellent understanding!',
    'This is clear, concise, and complete!',
    'What a powerful argument!',
    'I knew you could do it!',
  ];

  private static readonly CODEWARS_USERS: UserDetail = {
    id: '1',
    username: 'mont.ana',
    name: 'Ana Montana',
    honor: 40,
    clan: 'turntabl',
    ranks: {
      overall: {
        rank: '-7',
        name: '7 kyu',
        color: 'white',
        score: 22,
      },
      languages: {
        java: {
          rank: '-7',
          name: '7 kyu',
          color: 'white',
          score: 22,
        },
        python: {
          rank: '-7',
          name: '7 kyu',
          color: 'white',
          score: 22,
        },
      },
    },
    // comments: [...LocalUserDetailService.COMMENTS],
    comments: [],
  };

  constructor() {}

  getUserDetail(userId: string): Observable<Response<UserDetail>> {
    return createObservable<Response<UserDetail>>({
      success: true,
      data: {
        data: LocalUserDetailService.CODEWARS_USERS,
      },
    });
  }

  addUserComment(
    userId: string,
    comment: string
  ): Observable<Response<Comment>> {
    return createObservable<Response<Comment>>({
      success: true,
      data: {
        data: { commentId: userId, commentText: comment },
      },
    });

    // return throwError(() => new Error('Method not implemented.'));
  }
}
