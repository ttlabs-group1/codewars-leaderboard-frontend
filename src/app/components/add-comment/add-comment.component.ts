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
  @Output() onAddComment: EventEmitter<boolean> = new EventEmitter();

  comment: string = '';
  loading: boolean = false;

  constructor(
    @Inject(USER_DETAIL_SERVICE_TOKEN)
    private userDetailService: UserDetailService
  ) {}

  addComment(): void {
    this.loading = true;

    this.userDetailService
      .addUserComment(this.userId, this.comment)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.onAddComment.emit(true);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error(error.message);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          console.log('done');
        },
      })
      .add(() => {
        this.loading = false;

        console.log(
          'Will be executed on both success or error of the previous subscription'
        );
      });
  }

  ngOnInit() {
    if (!this.userId) {
      throw new TypeError("'userId' is required");
    }
  }
}
