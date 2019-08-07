import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ExploreComponent } from '../explore/explore.component';
import { ProfileComponent } from '../profile/profile.component';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  home = HomeComponent;
  explore = ExploreComponent;
  profile = ProfileComponent;
  notifications = NotificationComponent;
  constructor() { }

  ngOnInit() {
  }

}
