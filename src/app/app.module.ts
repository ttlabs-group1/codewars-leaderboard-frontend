import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPage } from './pages/landing/landing.page';
import { LeaderBoardPage } from './pages/leader-board/leader-board.page';
import { UserDetailPage } from './pages/user-detail/user-detail.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    LeaderBoardPage,
    UserDetailPage,
    NotFoundPage,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
