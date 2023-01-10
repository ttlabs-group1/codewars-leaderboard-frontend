import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.css'],
})
export class UserDetailPage {
  constructor(private route: ActivatedRoute) {}

  userId!: number;

  // userDetail: any[] = [
  //   {}
  // ]

  languages: any[] = [
    {
      language: 'Java',
      rank: '6kyu',
      score: 75,
    },
    {
      language: 'Python',
      rank: '7kyu',
      score: 68,
    },
  ];

  comments: any[] = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat?',
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap.get('id'));

      this.userId = Number(paramMap.get('id'));
    });
  }
}
