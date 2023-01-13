import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {
  AUTH_SERVICE_TOKEN,
  LEADERBOARD_SERVICE_TOKEN,
  USER_DETAIL_SERVICE_TOKEN,
} from './services/utilities';
import { LocalUserDetailService } from './services/local-user-detail.service';
import { LocalAuthService } from './services/local-auth.service';
import { LocalLeaderboardService } from './services/local-leaderboard.service';

import { AppUserStore } from './stores/app-user.store';
import { FormsModule } from '@angular/forms';
import { AddCodewarsUserComponent } from './components/add-codewars-user/add-codewars-user.component';
import { RemoteUserDetailService } from './services/remote-user-detail.service';
import { RemoteAuthService } from './services/remote-auth.service';

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
    AddCodewarsUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AppUserStore,
    { provide: AUTH_SERVICE_TOKEN, useClass: RemoteAuthService },
    { provide: USER_DETAIL_SERVICE_TOKEN, useClass: RemoteUserDetailService },
    { provide: LEADERBOARD_SERVICE_TOKEN, useClass: LocalLeaderboardService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
