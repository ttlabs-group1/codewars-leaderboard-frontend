import { Component } from '@angular/core';
import { ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.page.html',
  styleUrls: ['./leader-board.page.css']
})
export class LeaderBoardPage {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  

  users_honors: any[] = [
    {
        "username": "walker00",
        "name": "Elvis Opoku Amoako",
        "honor": 965,
        "clan": "turntabl",
        "ranks": {
            "overall": {
                "rank": "-4",
                "name": "4 kyu",
                "color": "blue",
                "score": 1171
            },
            "languages": {
                "python": {
                    "rank": "-4",
                    "name": "4 kyu",
                    "color": "blue",
                    "score": 1171
                },
                "java": {
                    "rank": "-7",
                    "name": "7 kyu",
                    "color": "white",
                    "score": 32
                },
                "scala": {
                    "rank": "-8",
                    "name": "8 kyu",
                    "color": "white",
                    "score": 8
                }
            }
        },
        "comments": []
    },
    {
        "username": "EveNyarango",
        "name": "Eve Nyarango",
        "honor": 360,
        "clan": "turntabl",
        "ranks": {
            "overall": {
                "rank": "-5",
                "name": "5 kyu",
                "color": "yellow",
                "score": 362
            },
            "languages": {
                "javascript": {
                    "rank": "-6",
                    "name": "6 kyu",
                    "color": "yellow",
                    "score": 81
                },
                "java": {
                    "rank": "-6",
                    "name": "6 kyu",
                    "color": "yellow",
                    "score": 185
                },
                "python": {
                    "rank": "-8",
                    "name": "8 kyu",
                    "color": "white",
                    "score": 2
                },
                "typescript": {
                    "rank": "-6",
                    "name": "6 kyu",
                    "color": "yellow",
                    "score": 128
                }
            }
        },
        "comments": [
            {
                "commentText": "actually testing again"
            },
            {
                "commentText": "actually testing again 1"
            },
            {
                "commentText": "actually testing again 2"
            }
        ]
    },
   ];

  users: any[] = [{
    username: "frederick.arthur",
    name: "Frederick Arthur",
    score: 500,
    language: "Python",
    id: 4
  }];

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
}
