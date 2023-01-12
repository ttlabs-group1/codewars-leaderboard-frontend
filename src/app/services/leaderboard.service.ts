import { Observable } from 'rxjs';
import { Filter, Honor } from '../models/leaderboard.model';
import { Response } from '../models/response.model';

export interface LeaderboardService {
  getUsersByHonor(): Observable<Response<Honor[]>>;

  getUsersByFilter(language: string): Observable<Response<Filter[]>>;

  addUser(username: string): Observable<Response<string>>;

  removeUser(id: string): Observable<Response<string>>;
}
