import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { Response } from '../models/response.model';
import { UserDetail } from '../models/user-detail.model';

export interface UserDetailService {
  getUserDetail(userId: string): Observable<Response<UserDetail>>;

  addUserComment(userId: string, comment: string): Observable<Comment>;
}
