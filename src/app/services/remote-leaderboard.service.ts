import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Honor } from '../models/leaderboard.model';
import { LeaderboardService } from './leaderboard.service';
import { Response } from '../models/response.model';
import { buildUrl } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class RemoteLeaderboardService implements LeaderboardService{
  constructor(private http: HttpClient) { }

  addUser(username: string): Observable<Response<string>> {
    const url = buildUrl('/addUser');
    return this.http.post<Response<string>>(url, username);
  }

  getUsersByHonor(): Observable<Response<Honor[]>>{
    const url = buildUrl('/getUsers/honors');
    return this.http.get<Response<Honor[]>>(url);
  }

  getUsersByFilter(sortBy?: string): Observable<Response<any[]>>{
    const url = buildUrl('/getUsers');
    const params = sortBy ? new HttpParams().set('sortBy', sortBy) : {};
    return this.http.get<Response<any[]>>(url, {params: params});
  }

  removeUser(codewarsId: string): Observable<Response<string>>{
    const url = buildUrl('/removeUser');
    const params = codewarsId ? new HttpParams().set('codewarsId', codewarsId) : {};
    return this.http.delete<Response<string>>(url); 
  }
}
