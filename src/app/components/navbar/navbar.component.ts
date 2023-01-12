import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AUTH_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AppUserStore } from 'src/app/stores/app-user.store';
import { AddCodewarsUserComponent } from '../add-codewars-user/add-codewars-user.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DialogService]
})
export class NavbarComponent implements OnInit, OnDestroy {

  ref?: DynamicDialogRef;

  loggedInUser?: User;

  private userStoreSubscription?: Subscription;
  private authServiceSubscription?: Subscription;

  constructor(
    private router: Router,
    public dialogService: DialogService,
    private userStore: AppUserStore,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  ngOnDestroy(): void {
    this.ref?.close();
    this.userStoreSubscription?.unsubscribe();
  }

  getUser(): void {
    this.userStoreSubscription?.unsubscribe();
    this.userStoreSubscription = this.userStore.user
      .subscribe({
        next: user => this.loggedInUser = user,
        error: error => console.error(error)
      });
  }

  showRegister() {
    this.ref = this.dialogService.open(RegisterComponent, {
      header: 'Welcome!',
      width: '30%'
    });
  }

  showLogin() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Welcome Back!',
      width: '30%'
    });
  }

  showAddCodewarsUser() {
    this.ref = this.dialogService.open(AddCodewarsUserComponent, {
      header: 'Add Codewars User',
      width: '30%'
    });
  }

  logout() {
    this.authServiceSubscription?.unsubscribe();
    this.authServiceSubscription = this.authService.logout("JSESSIONID")
      .subscribe({
        next: value => {
          this.userStore.removeUser();
          this.router.navigateByUrl('/');
        },
        error: err => console.error(err)
      });
  }
}
