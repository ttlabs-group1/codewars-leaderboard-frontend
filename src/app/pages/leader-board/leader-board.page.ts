import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ConfirmationService, MessageService} from 'primeng/api';
import { Filter, Honor } from 'src/app/models/leaderboard.model';
import { LEADERBOARD_SERVICE_TOKEN } from 'src/app/services/utilities';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.page.html',
  styleUrls: ['./leader-board.page.css']
})
export class LeaderBoardPage implements OnInit, OnDestroy{
  timeInterval?: Subscription;
  users_honors: Honor[] = [];
  users_filter: any[] = [];
  languages: string[] = ["JavaScript", "Python", "Ruby", "Java", "C#", "C++", "Swift", "Go", "Scala", 
  "Kotlin", "TypeScript", "Shell", "PHP", "Lua", "Crystal", "Rust", "F#", "Lua", "Perl", "Erlang", 
  "Elixir", "R", "Julia", "C", "Swift", "Dart", "Haskell", "OCaml", "Racket", "Scheme", "Forth", "Brainfuck", 
  "Smalltalk", "Lua", "Groovy", "Objective-C"];
  filterValue: string = "overall";

  
  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    @Inject(LEADERBOARD_SERVICE_TOKEN) private leaderboardService: LeaderboardService
    ) {}
    
    ngOnInit(): void {
      this.getUsersHonor();
      this.getUsersFilter(this.filterValue);
    }

    getUsersHonor(){
      this.timeInterval = interval(5000).pipe(
        startWith(0),
        switchMap(() => this.leaderboardService.getUsersByHonor())).subscribe({
          next: value => {
            console.log(value.data);
            if (value.data) this.users_honors = value.data.data;
          }
        }
      )
    }

    getUsersFilter(filterValue: string){
      this.timeInterval = interval(5000).pipe(
        startWith(0),
        switchMap(() => this.leaderboardService.getUsersByFilter(this.filterValue))).subscribe({
          next: value => {
            console.log(value.data);
            if (value.data) this.users_filter = value.data.data;
          }
        }
      )
    }
    

    removeUser(userId: string){
      this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        
        accept: () => {
          console.log(userId)
          this.leaderboardService.removeUser(userId).subscribe(response => {
            this.users_honors = this.users_honors.filter(item => item.codewarsId !== userId);
            this.users_filter = this.users_filter.filter(item => item.codewarsId !== userId);
            this.messageService.add({severity:'success', summary: 'Success', detail: 'User deleted successfully.'})
          }, error => {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong.'});
            console.log("An error occured")
          })  
        },
        reject: () => {
          
        }
      });
    }
    
    
    onChange($event: any){
      this.filterValue = $event.value.toLowerCase();
      console.log(this.filterValue);
      this.leaderboardService.getUsersByFilter(this.filterValue).subscribe({
        next: value => {
          console.log(value.data);
          if (value.data) this.users_filter = value.data.data;
        }
      })
    }
    
    
    ngOnDestroy(): void {
      this.timeInterval?.unsubscribe();
    }

    language: any[] = [
      {
        "username": "ernest",
        "codewarsId": "61d70ef5693e8e004ab6d06e",
        "name": "Kofi Ernest",
        "ranks": {
            "overall": {
                "rank": "-4",
                "name": "4 kyu",
                "color": "blue",
                "score": 1
            },
            "languages": {
                "python": {
                    "rank": "-4",
                    "name": "4 kyu",
                    "color": "blue",
                    "score": 12
                }
            }
        }
      },
      {
        "username": "jdoe",
        "codewarsId": "61d70ef5693e8e004ab6d06e2",
        "name": "John Doe",
        "ranks": {
            "overall": {
                "rank": "-4",
                "name": "4 kyu",
                "color": "blue",
                "score": 2
            },
            "languages": {
                "python": {
                    "rank": "-4",
                    "name": "4 kyu",
                    "color": "blue",
                    "score": 24
                }
            }
        }
      },
      {
        "username": "kwame.sarfo",
        "codewarsId": "61d70ef5693e8e004ab6d06e3",
        "name": "Kwame Sarfo",
        "ranks": {
            "overall": {
                "rank": "-4",
                "name": "4 kyu",
                "color": "blue",
                "score": 3
            },
            "languages": {
                "java": {
                    "rank": "-4",
                    "name": "4 kyu",
                    "color": "blue",
                    "score": 36
                }
            }
        }
      }
    ]
  }
