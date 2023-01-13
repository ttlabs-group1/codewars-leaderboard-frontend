import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { IsNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';
import { LandingPage } from './pages/landing/landing.page';
import { LeaderBoardPage } from './pages/leader-board/leader-board.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { UserDetailPage } from './pages/user-detail/user-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    canActivate: [IsNotAuthenticatedGuard]
  },
  {
    path: 'leaderboard',
    component: LeaderBoardPage,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'user/:id',
    component: UserDetailPage,
    canActivate: [IsAuthenticatedGuard],
  },
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
