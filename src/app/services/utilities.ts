import { HttpHeaders } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const USER_STORAGE_KEY = 'user';
export const SESSION_STORAGE_KEY = 'sessionId';

export const AUTH_SERVICE_TOKEN = new InjectionToken<string>('auth-service');
export const USER_DETAIL_SERVICE_TOKEN = new InjectionToken<string>(
  'user-detail-service'
);
export const LEADERBOARD_SERVICE_TOKEN = new InjectionToken<string>(
  'leaderboard-service'
);

export function createObservable<T>(value: T): Observable<T> {
  return new Observable<T>((subscriber) => {
    subscriber.next(value);
    subscriber.complete();
  });
}

export function buildUrl(path: string): string {
  return `${environment.baseUrl}${path}`;
}

export function handleError(error: any): Observable<never> {
  throw new Error('Oops something went wrong! Please try again later.');
}

const baseHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS', 'DELETE', 'PUT'],
};

export const httpOptions = {
  headers: new HttpHeaders({ ...baseHeaders }),
};

export const httpTokenOptions = {
  headers: new HttpHeaders({
    ...baseHeaders,
    'Set-Cookie': localStorage.getItem('token') || '',
  }),
};
