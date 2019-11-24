import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ExploreComponent } from '../explore/explore.component';
import { ProfileComponent } from '../profile/profile.component';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import {ModalService} from 'ng-zorro-antd-mobile';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  flag = true;
  index = 0;
  avatar: string;
  private pushService: any;
  constructor(private router: Router, private storageService: StorageService) {
    this.avatar = localStorage.getItem('avatar');

   }

  ngOnInit() {
    if (this.storageService.GetLocal('token') === null) {
      this.router.navigateByUrl('/login');
    }

    // this.pushService.token.subscribe(token => {
    //   console.log('FCM TOKEN: ', token);
    //   localStorage.setItem('fcm-token', token);
    // });
  }

  onChange(item) {
    // console.log('onChange', item);
  }

  onTabClick(item) {
    // console.log('onTabClick', item);
  }

  selectCard(e) {
    // console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }

}
