import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DialogService]
})
export class NavbarComponent implements OnDestroy {

  ref?: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  ngOnDestroy(): void {
    this.ref?.close();
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
}
