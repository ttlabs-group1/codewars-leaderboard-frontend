import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter, Honor } from '../models/leaderboard.model';
import { Response } from "../models/response.model";
import { LeaderboardService } from './leaderboard.service';
import { createObservable } from './utilities';

@Injectable()
export class LocalLeaderboardService implements LeaderboardService{
  constructor() { }

  private static readonly users_honors: Honor[] =  [
    {
        "codewarsId": "61d70ef5693e8e004ab6d06e",
        "username": "walker00",
        "name": "Elvis Opoku Amoako",
        "honor": 965
    },
    {
        "codewarsId": "63bd9c7e00d4800ba382c18c",
        "username": "EveNyarango",
        "name": "Eve Nyarango",
        "honor": 360
    }
];

private static readonly users_filter: Filter[] = [
  {
    "username": "walker00",
    "codewarsId": "61d70ef5693e8e004ab6d06e",
    "name": "Elvis Opoku Amoako",
    "ranks": {
        "overall": {
            "rank": "-4",
            "name": "4 kyu",
            "color": "blue",
            "score": 1171
        },
        "languages": {
            "python": {
                "rank": "-4",
                "name": "4 kyu",
                "color": "blue",
                "score": 1171
            },
            "java": {
                "rank": "-7",
                "name": "7 kyu",
                "color": "white",
                "score": 32
            },
            "scala": {
                "rank": "-8",
                "name": "8 kyu",
                "color": "white",
                "score": 8
            }
        }
    }
},
{
    "username": "kwamesarfo",
    "codewarsId": "63bd97c93b49e466ff3e7696",
    "name": "",
    "ranks": {
        "overall": {
            "rank": "-5",
            "name": "5 kyu",
            "color": "yellow",
            "score": 364
        },
        "languages": {
            "javascript": {
                "rank": "-7",
                "name": "7 kyu",
                "color": "white",
                "score": 32
            },
            "python": {
                "rank": "-5",
                "name": "5 kyu",
                "color": "yellow",
                "score": 237
            },
            "java": {
                "rank": "-6",
                "name": "6 kyu",
                "color": "yellow",
                "score": 95
            }
        }
    }
  }
];

  getUsersByHonor(): Observable<Response<Honor[]>> {
    return createObservable<Response<Honor[]>>({
      success: true,
      data: {
        data: LocalLeaderboardService.users_honors
      }
    })
  }

  getUsersByFilter(language: string): Observable<Response<any[]>> {
    return createObservable<Response<any[]>>({
      success: true,
      data: {
        data: LocalLeaderboardService.users_filter
      }
    })
  }
}
