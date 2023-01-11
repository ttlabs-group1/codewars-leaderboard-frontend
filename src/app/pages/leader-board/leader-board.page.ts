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
  users_filter: Filter[] = [];
  filterValue: string = "overall";

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
      })
    }


  removeUser(){
  this.confirmationService.confirm({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      console.log("Hello")
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
        if (value.data) this.users_filter = value.data.data
      }
    })
  }
}
