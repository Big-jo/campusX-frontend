import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { IPost } from '../interfaces/Post';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalService, ActionSheetService } from 'ng-zorro-antd-mobile';
import { NotifierService } from 'angular-notifier';
export interface IUser {
  user: any;
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
    bio: string;
  };
  userTag: string;
  visits: number;
}
interface IResponse {
  user: IUser;
  following: boolean;
  followed: boolean;
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
  styleUrls: ['./profile.component.css'],
})


export class ProfileComponent implements OnInit {
  User: IUser;
  Posts: Array<IPost>;
  UserId;
  OptionsShow = true;
  profileShow = true;
  auth: string;
  modal = {
    state: false
  };
  animating = false;
  following = false;
  followStatus = 'follow';
  followed = false;
  activity = false;
  notifier: NotifierService;
  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService,
              private postService: PostService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private actionSheet: ActionSheetService) {
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
      // this.animating = !this.animating;
      this.User = res.user;

      // Do these if this user follows a certain user
      if (res.following) {
        this.following = res.following;
        this.followStatus = 'unfollow';
      }
      if (res.followed) {
        this.followed = res.followed;
      }
    });
  }


  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  changeAvatar() {
    this.router.navigateByUrl('/avatar');
  }

  showActionSheet = message => {
    const BUTTONS = ['Edit Profile', 'Log Out', 'Cancel'];
    this.actionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        title: 'Prefrences',
        message,
        maskClosable: true
      },
      buttonIndex => {
        console.log(buttonIndex);
        switch (buttonIndex) {
          case 0:
            this.changeAvatar();
            break;
          case 1:
            this.logOut();
            break;
          default:
            break;
        }
      }
    );
  }

  Follow(targetID) {
    if (this.following === true) {
      this.activity = !this.activity;
      this.unFollow(targetID);
    } else {
      this.activity = !this.activity;
      this.userService.Follow(targetID).subscribe((res: Response) => {
        this.FollowSuccess(targetID);
      }, (error) => {
        this.activity = !this.activity;
        this.FollowError();
      });
    }
  }

  FollowSuccess(user: IUser) {
    this.activity = !this.activity;
    this.followStatus = 'unfollow';
    this.following = !this.following;
    this.notifier.notify('success', `You're now following ${user.user.name}@ ${user.user.userTag}`);
  }

  FollowError() {
    this.notifier.notify('error', 'Oops an error just occured');
  }

  unFollow(user) {
    this.activity = !this.activity;
    this.following = !this.following;
    this.followStatus = 'Follow';
  }

  Style(): object {
    if (this.following === true) {
      return {
        'background-color': 'white',
         color: 'black',
        };
     } else {
      return {
        'background-color': '#082943',
         color: 'white',
        };
     }
  }
}
