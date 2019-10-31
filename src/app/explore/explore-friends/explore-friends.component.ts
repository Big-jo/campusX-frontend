import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'selenium-webdriver/http';

interface IUser {
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
  constructor(private location: Location, private userService: UserService) {
    this.userID = localStorage.getItem('userID');
    this.userService.Explore().subscribe((res: IResponse) => {
        console.log(res.onCampus);
        this.Users1 = res.onCampus;
        this.Users2 = res.otherCampuses;
      });
  }
  ngOnInit() {
  }

  follow(targetID, userTag) {
    // User service to follow
    this.userService.Follow(targetID).subscribe((res: Response) => {
      console.log(res);
      // display message
    });
  }
  PreviousPage() {
    this.location.back();
  }
}

