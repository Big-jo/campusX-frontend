import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import {IPost} from '../interfaces/Post';
interface IUser {
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
interface IResponse{
 user: IUser;
 posts: Array<IPost>;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User: IUser;
  Posts: Array<IPost>;
  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.userService.GetUserInfo()
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
