import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
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

  onAddComment(comment: string): void {
    this.toggleAddComment();
    this.userDetail?.comments.unshift({ commentText: comment, commentId: '1' });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = String(paramMap.get('id'));

      this.userDetailService.getUserDetail(this.userId).subscribe({
        next: (value) => {
          if (value.success) {
            this.userDetail = value.data?.data;
            console.log(this.userDetail);
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
