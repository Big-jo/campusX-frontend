import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

interface IUser {
  id: string;
  email: string;
  name: string;
  userProfile: {
    gender: string
    rep_points: number;
    university: string;
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

  constructor(private location: Location, private userService: UserService) {
    this.Users1 = [];
    this.Users2 = [];
  }
  ngOnInit() {
    this.userService.Explore()
      .subscribe((res: IResponse) => {
        console.log(res);

      })
  }

  follow(id) {
    // User service to follow
  }
  PreviousPage() {
    this.location.back();
  }
}

