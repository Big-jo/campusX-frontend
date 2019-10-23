import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFriendsComponent } from './explore-friends.component';

describe('ExploreFriendsComponent', () => {
  let component: ExploreFriendsComponent;
  let fixture: ComponentFixture<ExploreFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
