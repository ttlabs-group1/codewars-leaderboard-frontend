import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardPage } from './leader-board.page';

describe('LeaderBoardPage', () => {
  let component: LeaderBoardPage;
  let fixture: ComponentFixture<LeaderBoardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderBoardPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
