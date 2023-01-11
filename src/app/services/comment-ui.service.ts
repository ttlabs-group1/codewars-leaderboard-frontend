import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentUiService {
  private showAddComment: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddComment(): void {
    this.showAddComment = !this.showAddComment;
    this.subject.next(this.showAddComment);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
