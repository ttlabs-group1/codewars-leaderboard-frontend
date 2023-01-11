import { Observable } from "rxjs";
import { Auth } from "../models/auth.model";
import { Response } from "../models/response.model";
import { User } from "../models/user.model";

export interface AuthService {
    login(credentials: Auth): Observable<Response<User>>;
    register(credentials: Auth): Observable<Response<string>>;
}
