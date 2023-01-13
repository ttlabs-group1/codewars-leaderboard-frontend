import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { USER_STORAGE_KEY } from '../services/utilities';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLoggedIn = localStorage.getItem(USER_STORAGE_KEY);

    if (!isLoggedIn) {
      this.router.navigate(['/']);
    }

    return true;
  }
}
