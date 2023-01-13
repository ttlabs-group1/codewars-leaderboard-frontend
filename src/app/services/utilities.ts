import { HttpHeaders } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const USER_STORAGE_KEY = 'user';
export const SESSION_KEY = 'JSESSIONID';

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
  return `${environment.baseUrl}/api/v1${path}`;
}

export function handleError(error: any): Observable<never> {
  throw new Error('Oops something went wrong! Please try again later.');
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(cname: string) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

const baseHeaders = {
  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Credentials': 'true',
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS', 'DELETE', 'PUT'],
  // 'Access-Control-Allow-Headers':
  //   'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
};

export const httpOptions = {
  headers: new HttpHeaders({ ...baseHeaders }),
};

export const httpTokenOptions = {
  headers: new HttpHeaders({
    ...baseHeaders,
  }),
  // withCredentials: true,
};
