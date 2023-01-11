import { Component } from '@angular/core';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.page.html',
  styleUrls: ['./leader-board.page.css']
})
export class LeaderBoardPage {
  users_honors: any[] = [{
    username: "frederick.arthur",
    name: "Frederick Arthur",
    honor: 500,
    id: 1
  },
  {
    username: "caleb.fianu",
    name: "Caleb Fianu",
    honor: 500,
    id: 2
  },
  {
    username: "kwaku.biney",
    name: "Kwaku Arthur",
    honor: 500,
    id: 3
  }];

  users: any[] = [{
    username: "frederick.arthur",
    name: "Frederick Arthur",
    score: 500,
    language: "Python",
    id: 4
  }];

  filters: string[] = ["overall", "java", "python", "typescript"];
}
