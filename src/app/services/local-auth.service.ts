import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { Response } from '../models/response.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { createObservable } from './utilities';

@Injectable()
export class LocalAuthService implements AuthService {

  private static readonly USER: User = {
    fullName: "John Doe",
    username: "john_doe"
  }

  constructor() { }

  login(credentials: Credentials): Observable<HttpResponse<Response<User>>> {
    return createObservable<HttpResponse<Response<User>>>(new HttpResponse({
      body: {
        success: true,
        data: {
          data: LocalAuthService.USER
        }
      }
    }));
  }

  register(credentials: Credentials): Observable<Response<string>> {
    return createObservable<Response<string>>({
      success: true,
      data: {
        data: "registration successful"
      }
    });
  }

  logout(sessionId: string): Observable<null> {
    return createObservable<null>(null);
  }
}
