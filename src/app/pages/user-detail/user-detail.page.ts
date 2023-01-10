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

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap.get('id'));

      this.userId = Number(paramMap.get('id'));
    });
  }
}
