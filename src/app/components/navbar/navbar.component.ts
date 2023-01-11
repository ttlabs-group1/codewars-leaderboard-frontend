import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DialogService]
})
export class NavbarComponent {

  constructor(public dialogService: DialogService) {}

  ref?: DynamicDialogRef;

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
