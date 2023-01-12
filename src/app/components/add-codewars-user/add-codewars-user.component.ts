import { Component, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { LEADERBOARD_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-add-codewars-user',
  templateUrl: './add-codewars-user.component.html',
  styleUrls: ['./add-codewars-user.component.css']
})
export class AddCodewarsUserComponent implements OnDestroy {

  nameError = '';
  codewarsUser = '';
  submitError = '';
  loading = false;

  private leaderboardSubscription?: Subscription;

  constructor(@Inject(LEADERBOARD_SERVICE_TOKEN) private leaderboarService: LeaderboardService) {}

  ngOnDestroy(): void {
      this.leaderboardSubscription?.unsubscribe();
  }

  addUser() {
    this.loading = true;
    if (!this.codewarsUser) {
      this.nameError = 'Invalid name.';
      this.loading = false;
      return;
    }

    this.leaderboardSubscription?.unsubscribe();
    this.leaderboardSubscription = this.leaderboarService.addUser(this.codewarsUser)
      .subscribe({
        next: value => console.log('successful'),
        error: err => {
          console.error(err);
          this.submitError = err;
        },
        complete: () => this.loading = false
      });
  }
}
