import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { Response } from '../models/response.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { buildUrl, handleError } from './utilities';

@Injectable()
export class RemoteAuthService implements AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<HttpResponse<Response<User>>> {
    const url = buildUrl('login');
    return this.http
      .post<Response<User>>(url, credentials, { observe: 'response' })
      .pipe(catchError(handleError));
  }

  register(credentials: Credentials): Observable<Response<string>> {
    const url = buildUrl('register');
    return this.http
      .post<Response<string>>(url, credentials)
      .pipe(catchError(handleError));
  }

  logout(sessionId: string): Observable<null> {
    const url = buildUrl('logout');
    return this.http
      .post<null>(url, null)
      .pipe(catchError(handleError));
  }
}
