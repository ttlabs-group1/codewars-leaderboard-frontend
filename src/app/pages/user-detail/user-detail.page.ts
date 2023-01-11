import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentUiService } from 'src/app/services/comment-ui.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.css'],
})
export class UserDetailPage {
  userId!: string;
  showAddComment!: boolean;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private commentUiService: CommentUiService
  ) {
    this.subscription = this.commentUiService
      .onToggle()
      .subscribe((value) => (this.showAddComment = value));
  }

  toggleAddComment(): void {
    this.commentUiService.toggleAddComment();
  }

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

      this.userId = String(paramMap.get('id'));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
