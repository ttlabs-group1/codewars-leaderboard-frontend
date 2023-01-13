import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credentials } from 'src/app/models/credentials.model';
import { AuthService } from 'src/app/services/auth.service';
import { AUTH_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AppUserStore } from 'src/app/stores/app-user.store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  credentials: Credentials = {
    fullName: '',
    username: '',
    password: ''
  };
  confirmPassword = '';
  
  nameError = '';
  usernameError = '';
  passwordError = '';
  confirmError = '';

  loading = false;

  private authSubscription?: Subscription;

  constructor(
    private router: Router,
    private userStore: AppUserStore,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  register() {
    this.loading = true;
    let errors = false;
    this.clearErrorMessages();
    if (!this.isValidName(this.credentials.fullName!)) {
      this.usernameError = 'Invalid name.'
      errors = true;
    }
    if (!this.isValidUsername(this.credentials.username)) {
      this.usernameError = 'Invalid username.'
      errors = true;
    }
    if (!this.isValidPassword(this.credentials.password)) {
      this.passwordError = 'Invalid password.'
      errors = true;
    }
    if (!this.isValidConfirmPassword(this.credentials.password, this.confirmPassword)) {
      this.confirmError = 'Passwords mismatched.'
      errors = true;
    }
    if (errors) {
      this.loading = false;
      return;
    }

    this.authSubscription?.unsubscribe();
    this.authSubscription = this.authService.login(this.credentials)
      .subscribe({
        next: value => {
          // Login user
          this.login();
        },
        error: err => { 
          console.error(err);
          this.loading = false;
        }
      });
  }

  login(): void {
    this.authSubscription?.unsubscribe();
    this.authSubscription = this.authService.login(this.credentials)
      .subscribe({
        next: value => {
          console.log('success');
          this.userStore.setUser(value.data?.data!);
          location.pathname = '/leaderboard';
        },
        error: err => console.error(err),
        complete: () => this.loading = false
      });
  }

  isValidName(name: string): boolean {
    return name != '';
  }

  isValidUsername(username: string): boolean {
    return username != '';
  }

  isValidPassword(password: string): boolean {
    return password != '';
  }

  isValidConfirmPassword(password: string, confirm: string): boolean {
    return password === confirm;
  }

  clearErrorMessages() {
    this.usernameError = '';
    this.passwordError = '';
  }

}
