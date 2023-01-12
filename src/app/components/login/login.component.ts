import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credentials } from 'src/app/models/credentials.model';
import { AuthService } from 'src/app/services/auth.service';
import { AUTH_SERVICE_TOKEN, USER_STORAGE_KEY } from 'src/app/services/utilities';
import { AppUserStore } from 'src/app/stores/app-user.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  credentials: Credentials = {
    username: '',
    password: ''
  };
  
  usernameError = '';
  passwordError = '';

  private authSubscription?: Subscription;

  constructor(
    private router: Router,
    private userStore: AppUserStore,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  login() {
    let errors = false;
    this.clearErrorMessages();
    if (!this.isValidUsername(this.credentials.username)) {
      this.usernameError = 'Invalid username.'
      errors = true;
    }
    if (!this.isValidPassword(this.credentials.password)) {
      this.passwordError = 'Invalid password.'
      errors = true;
    }
    if (errors) return;

    this.authSubscription?.unsubscribe();
    this.authSubscription = this.authService.login(this.credentials)
      .subscribe({
        next: value => {
          console.log('success');
          this.userStore.setUser(value.data?.data!);
          this.router.navigateByUrl('/leaderboard');
        },
        error: err => console.error(err)
      });
  }

  isValidUsername(username: string): boolean {
    return username != '';
  }

  isValidPassword(password: string): boolean {
    return password != '';
  }

  clearErrorMessages() {
    this.usernameError = '';
    this.passwordError = '';
  }
}
