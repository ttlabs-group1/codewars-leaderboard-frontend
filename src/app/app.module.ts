import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

import { LandingPage } from './pages/landing/landing.page';
import { LeaderBoardPage } from './pages/leader-board/leader-board.page';
import { UserDetailPage } from './pages/user-detail/user-detail.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabViewModule } from 'primeng/tabview';

import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AUTH_SERVICE_TOKEN } from './services/utilities';
import { LocalAuthService } from './services/local-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    LeaderBoardPage,
    UserDetailPage,
    NotFoundPage,
    NavbarComponent,
    FooterComponent,
    AddCommentComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    AvatarModule,
    TableModule,
    InputTextareaModule,
    DynamicDialogModule,
    InputTextModule,
  ],
  providers: [
    { provide: AUTH_SERVICE_TOKEN, useClass: LocalAuthService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
