import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'selenium-webdriver/http';
import { NotifierService } from 'angular-notifier';

interface IUser {
  user: {
    _id: string;
    email: string;
    name: string;
    userProfile: {
      gender: string
      rep_points: number;
      university: string;
      avatar: string;
    };
    userTag: string;
  };
  isFollowed: boolean;
  isFollowing: boolean;
}

interface IResponse {
  onCampus: IUser[];
  otherCampuses: IUser[];
}
@Component({
  selector: 'app-explore-friends',
  templateUrl: './explore-friends.component.html',
  styleUrls: ['./explore-friends.component.css']
})
export class ExploreFriendsComponent implements OnInit {
  Users1: IUser[]; // Users from same campus
  Users2: IUser[]; // Users from other campuses
  userID: string;
  animating = false;
  // selectedIndex1;  // Index of elements
  // targetID1;
  // selectedIndex2;
  // targetID2;
  notifier: NotifierService;
  // selectedIndex2: {index: string, targetID: string}; // Index of elements for other campuses
  constructor(private location: Location, private userService: UserService, private notifierService: NotifierService) {
    this.userID = localStorage.getItem('userID');
    this.notifier = notifierService;
  }
  ngOnInit() {
    this.animating = !this.animating;
    this.userService.Explore().subscribe((res: IResponse) => {
     this.onSuccess(res);
    });
  }

  onSuccess(res) {
    this.animating = !this.animating;
    this.Users1 = res.onCampus;
    this.Users2 = res.otherCampuses;
  }

  onError(error) {
    this.animating = !this.animating;
    this.notifier.notify('error', 'Oops an error just occured');
  }

  /**
   * Follow a user from the same campus
   */
  // follow1(targetID, user: IUser, index) {
  //   this.userService.Follow(targetID).subscribe((res: Response) => {
  //     this.selectedIndex1 = index;
  //     this.targetID1 = targetID;
  //     this.FollowSuccess(user);
  //   }, (error) => {
  //     this.FollowError();
  //   });
  // }

  // /**
  //  * 
  //  * Follow a user from other campuses
  //  */
  // follow2(targetID, user: IUser, index) {
  //   this.userService.Follow(targetID).subscribe((res: Response) => {
  //     this.selectedIndex2 = index;
  //     this.targetID2 = targetID;
  //     this.FollowSuccess(user);
  //   }, (error) => {
  //     this.FollowError();
  //   });
  // }

  // FollowSuccess(user: IUser) {
  //   this.notifier.notify('success', `You're now following ${user.user.name}@ ${user.user.userTag}`);
  // }

  // FollowError() {
  //   this.notifier.notify('error', 'Oops an error just occured');
  // }
  PreviousPage() {
    this.location.back();
  }

  // Track Elements
    trackElement(index: number, User: IUser) {
      return User ? User.user._id : null;
    }
  }

