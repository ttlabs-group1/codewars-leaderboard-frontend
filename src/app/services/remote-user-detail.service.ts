import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { Response } from '../models/response.model';
import { UserDetail } from '../models/user-detail.model';
import { UserDetailService } from './user-detail.service';

@Injectable()
export class RemoteUserDetailService implements UserDetailService {
  constructor() {}

  getUserDetail(userId: string): Observable<Response<UserDetail>> {
    throw new Error('Method not implemented.');
  }
  addUserComment(
    userId: string,
    comment: string
  ): Observable<Response<Comment>> {
    throw new Error('Method not implemented.');
  }
}
