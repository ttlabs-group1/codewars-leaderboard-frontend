import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Credentials } from "../models/credentials.model";
import { Response } from "../models/response.model";
import { User } from "../models/user.model";

export interface AuthService {
    login(credentials: Credentials): Observable<HttpResponse<Response<User>>>;
    register(credentials: Credentials): Observable<Response<string>>;
    logout(sessionId: string): Observable<null>;
}
