import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { Response } from '../models/response.model';
import { UserDetail } from '../models/user-detail.model';
import { UserDetailService } from './user-detail.service';
import { buildUrl } from './utilities';

@Injectable()
export class RemoteUserDetailService implements UserDetailService {
  constructor(private http: HttpClient) {}

  getUserDetail(userId: string): Observable<Response<UserDetail>> {
    const url = buildUrl('/user-detail');
    return this.http.get<Response<UserDetail>>(url);
  }

  addUserComment(
    userId: string,
    comment: string
  ): Observable<Response<Comment>> {
    const url = buildUrl(`/add-coment/${userId}`);
    return this.http.post<Response<Comment>>(url, comment);
  }
}