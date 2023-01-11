import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDetail } from 'src/app/models/user-detail.model';
import { CommentUiService } from 'src/app/services/comment-ui.service';
import { UserDetailService } from 'src/app/services/user-detail.service';
import { USER_DETAIL_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.css'],
})
export class UserDetailPage {
  userId!: string;
  showAddComment!: boolean;
  subscription: Subscription;

  userDetail: UserDetail | undefined;

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
    'This is some awesome thinking!',
    "What terrific math skills you're showing!",
    'You are an amazing writer!',
    'Wow! You have improved so much!',
    'Nice idea!',
    'You are showing excellent understanding!',
    'This is clear, concise, and complete!',
    'What a powerful argument!',
    'I knew you could do it!',
  ];

  constructor(
    private route: ActivatedRoute,
    private commentUiService: CommentUiService,

    @Inject(USER_DETAIL_SERVICE_TOKEN)
    private userDetailService: UserDetailService
  ) {
    this.subscription = this.commentUiService
      .onToggle()
      .subscribe((value) => (this.showAddComment = value));
  }

  toggleAddComment(): void {
    this.commentUiService.toggleAddComment();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = String(paramMap.get('id'));

      this.userDetailService.getUserDetail(this.userId).subscribe({
        next: (value) => {
          if (value.success) {
            this.userDetail = value.data?.data;
          }
        },
        error: (error) => console.error(error.message),
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
