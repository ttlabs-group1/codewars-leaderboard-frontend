import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { UserDetailService } from 'src/app/services/user-detail.service';
import { USER_DETAIL_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  @Input() userId!: string;
  @Output() onAddComment: EventEmitter<string> = new EventEmitter();

  comment: string = '';
  loading: boolean = false;

  constructor(
    @Inject(USER_DETAIL_SERVICE_TOKEN)
    private userDetailService: UserDetailService
  ) {}

  addComment(): void {
    this.loading = true;

    try {
      this.userDetailService
        .addUserComment(this.userId, this.comment)
        .subscribe({
          next: (value) => {
            if (value.success) {
              this.onAddComment.emit(this.comment);
              console.log(value);
            }
          },
          error: (error) => {
            console.error(error.message);
          },
        });
    } finally {
      this.loading = false;
    }
  }

  ngOnInit() {
    if (!this.userId) {
      throw new TypeError("'userId' is required");
    }
  }
}
