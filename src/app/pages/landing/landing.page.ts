import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css'],
  providers: [DialogService]
})
export class LandingPage {

  constructor(public dialogService: DialogService) {}

  ref?: DynamicDialogRef;

  showRegister() {
    this.ref = this.dialogService.open(RegisterComponent, {
      header: 'Welcome!',
      width: '30%'
    });
  }
}
