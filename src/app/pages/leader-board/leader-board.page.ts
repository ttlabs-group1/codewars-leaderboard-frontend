import { Component, Inject, OnInit } from '@angular/core';
import { ConfirmationService, MessageService} from 'primeng/api';
import { Filter, Honor } from 'src/app/models/leaderboard.model';
import { LEADERBOARD_SERVICE_TOKEN } from 'src/app/services/utilities';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.page.html',
  styleUrls: ['./leader-board.page.css']
})
export class LeaderBoardPage {
  users_honors: Honor[] = [];
  users_filter: any[] = [];
  filterValue: string = "overall";

  language: any[] = [
    {
      "username": "walker00",
      "codewarsId": "61d70ef5693e8e004ab6d06e",
      "name": "Elvis Opoku Amoako",
      "ranks": {
          "languages": {
              "java": {
                  "rank": "-4",
                  "name": "4 kyu",
                  "color": "blue",
                  "score": 1171
              }
          }
      }
  },
  {
      "username": "cyril",
      "codewarsId": "63bd97c93b49e466ff3e7696",
      "name": "Cyril Acquah",
      "ranks": {
          "languages": {
              "java": {
                  "rank": "-7",
                  "name": "7 kyu",
                  "color": "white",
                  "score": 32
              }
          }
      }
    }
  ]

  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    @Inject(LEADERBOARD_SERVICE_TOKEN) private leaderboardService: LeaderboardService
    ) {}

    ngOnInit(): void {
      this.leaderboardService.getUsersByHonor().subscribe({
        next: value => {
          console.log(value.data);
          if (value.data) this.users_honors = value.data.data;
        }
      });

      this.leaderboardService.getUsersByFilter(this.filterValue).subscribe({
        next: value => {
          console.log(value.data);
          if (value.data) this.users_filter = value.data.data;
        }
      })
    }


  removeUser(userId: string){
  this.confirmationService.confirm({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      console.log(userId)
          this.messageService.add({severity:'success', summary: 'Success', detail: 'User deleted successfully.'})
      }
    });
  }


  onChange($event: any){
    this.filterValue = $event.value.toLowerCase();
    console.log(this.filterValue);
    this.leaderboardService.getUsersByFilter(this.filterValue).subscribe({
      next: value => {
        console.log(value.data);
        if (value.data) this.users_filter = this.language;
      }
    })
  }
}
