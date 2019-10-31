import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import {IPost} from '../interfaces/Post';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
export interface IUser {
  _id: string;
  email: string;
  followers: [];
  followings: [];
  name: string;
  userProfile: {
    avatar: string;
    gender: string
    level: number;
    rep_points: number;
    university: string;
  };
  userTag: string;
  visits: number;
}
interface IResponse {
  user: IUser;
 posts: Array<IPost>;
}

interface IParams extends ParamMap {
  params: {
    id: string
  };
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User: IUser;
  Posts: Array<IPost>;
  UserId;
  state = {
    selected: ''
  };
  OptionsShow = true;
  profileShow = true;
  auth: string;
  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, private postService: PostService, private route: ActivatedRoute, private location: Location, private router: Router) {
    this.auth = localStorage.getItem('userID');
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: IParams) => {
      this.UserId = params.params.id;
    });

    if (this.UserId === undefined) {
      this.UserId = localStorage.getItem('userID');
      this.GetUserInfo(this.UserId, 1);
    } else {
      this.GetUserInfo(this.UserId, 'user');
    }

    this.postService.GetPost(0, this.UserId).subscribe((res: IResponse) => {
      this.Posts = res.posts;
    });
  }

  PreviousPage() {
    this.location.back();
  }

  // Get User Info
  GetUserInfo(userID, key) {
    this.userService.GetUser(userID, key).subscribe((res: IResponse) => {
      this.User = res.user;
    });
  }

  // onSelect(event) {
  //   console.log(event);
  // }

  // onVisibleChange(event) {
  //   console.log(event);
  // }

  // onLeftClick() {
  //   console.log('onLeftClick');
  // }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  changeAvatar() {
    this.router.navigateByUrl('/avatar');
  }
}
