import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";
import { USER_STORAGE_KEY } from "../services/utilities";

@Injectable()
export class AppUserStore {

    private _user?: User;

    public user: BehaviorSubject<User | undefined> = new BehaviorSubject(this._user);

    constructor() {
        const storedUser = localStorage.getItem(USER_STORAGE_KEY);
        if (storedUser) {
            this.setUser(JSON.parse(storedUser));
        }
    }

    setUser(user: User): void {
        this._user = user;
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        this.user.next(this._user);
    }

    removeUser(): void {
        this._user = undefined;
        localStorage.removeItem(USER_STORAGE_KEY);
        this.user.next(this._user);
    }
}
