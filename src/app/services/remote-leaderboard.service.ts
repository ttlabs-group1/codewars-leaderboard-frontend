import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { Honor } from '../models/leaderboard.model';
import { LeaderboardService } from './leaderboard.service';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class RemoteLeaderboardService implements LeaderboardService{

  constructor(private http: HttpClient) { }
  addUser(username: string): Observable<Response<string>> {
    return this.http.post<Response<string>>(``, username);
  }

  getUsersByHonor(): Observable<Response<Honor[]>>{
    return this.http.get<Response<Honor[]>>(``);
  }

  getUsersByFilter(language: string): Observable<Response<any[]>>{
    return this.http.get<Response<any[]>>(``);
  }

  removeUser(id: string): Observable<Response<string>>{
    return this.http.delete<Response<string>>(``); 
  }
}
