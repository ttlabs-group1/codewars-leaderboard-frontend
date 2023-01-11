import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const AUTH_SERVICE_TOKEN = new InjectionToken<string>('auth-service');
export const USER_DETAIL_SERVICE_TOKEN = new InjectionToken<string>(
  'user-detail-service'
);
export const LEADERBOARD_SERVICE_TOKEN = new InjectionToken<string>('leaderboard-service');

export function createObservable<T>(value: T): Observable<T> {
  return new Observable<T>((subscriber) => {
    subscriber.next(value);
    subscriber.complete();
  });
}
