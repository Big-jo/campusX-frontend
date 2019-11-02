import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

interface IFollower {
  _id: string;
  follower: {
    _id: string;
    name: string;
    userTag: string;
    userProfile: {
      avatar: string;
    }
  };
}
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  followers: IFollower[];
  constructor(private userSerivce: UserService) { }

  ngOnInit() {
    this.userSerivce.GetFollowNotifications().subscribe((res) => {
      this.onSuccess(res);
    }, (error) => {
      this.onError(error);
    });
  }

  onSuccess(res) {
    this.followers = res.followers;
  }
  onError(error) {
    console.log(error);
  }
}
