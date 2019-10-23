import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import {IPost} from '../interfaces/Post';
import { ActivatedRoute, ParamMap } from '@angular/router';
export interface IUser {
  _id: string;
  email: string;
  followers: [];
  followings: [];
  name: string;
  userProfile: {
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
  constructor(private userService: UserService, private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: IParams) => {
      this.UserId = params.params.id;
      console.log(this.UserId);
    // Use this component to get all profile relate stuff
    });
    this.userService.GetUser('user', this.UserId)
      .subscribe((res: IResponse) => {
        console.log(res);
        this.User = res.user;
      });

    this.postService.GetPost(0).subscribe((res: IResponse) => {
      console.log(res);
      this.Posts = res.posts;
    });
  }
}
