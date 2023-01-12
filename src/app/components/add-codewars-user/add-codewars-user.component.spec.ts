import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodewarsUserComponent } from './add-codewars-user.component';

describe('AddCodewarsUserComponent', () => {
  let component: AddCodewarsUserComponent;
  let fixture: ComponentFixture<AddCodewarsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCodewarsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCodewarsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
