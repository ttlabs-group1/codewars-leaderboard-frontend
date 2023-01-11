import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const AUTH_SERVICE_TOKEN = new InjectionToken<string>('auth-service');

export function createObservable(value: any): Observable<any> {
    return new Observable<any>(subscriber => {
        subscriber.next(value);
        subscriber.complete();
    });
}