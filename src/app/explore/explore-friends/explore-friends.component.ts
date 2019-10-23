import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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
@Component({
  selector: 'app-explore-friends',
  templateUrl: './explore-friends.component.html',
  styleUrls: ['./explore-friends.component.css']
})
export class ExploreFriendsComponent implements OnInit {
  Users1: IUser[]; // Users from same campus
  Users2: IUser[]; // Users from other campuses

  constructor(private location: Location) {
    this.Users1 = [
      {
        id: '5d85fc1f3c3ba7279f003a25',
        name: 'Joseph Henshaw',
        userTag: '@Bigjo',
        email: 'furiousjoe16@gmail.com',
        userProfile: {
          rep_points: 0,
          university: 'Bells University Of Technology',
          gender: 'male'
        },
      },



      
    ];
    this.Users2 = [
      {
        id: '5d85fc1f3c3ba72746003a26',
        name: 'Joe Den',
        userTag: '@denden',
        email: 'den1@gmail.com',
        userProfile: {
          rep_points: 0,
          university: 'Covenant University',
          gender: 'male'
        }
      }
    ];
  }
  ngOnInit() {
  }

  follow(id) {
    // User service to follow
  }
  PreviousPage() {
    this.location.back();
  }
}

