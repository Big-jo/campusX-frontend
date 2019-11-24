import {Component, OnInit, TemplateRef, ViewChild, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../interfaces/Post';
import {ModalService} from 'ng-zorro-antd-mobile';
import {PwaService} from '../services/pwa.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {NotificationService} from '../services/notification.service';

interface Response {
  posts: Array<IPost>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  Posts: Array<IPost>;
  @ViewChild(TemplateRef, {static: false}) installModal: TemplateRef<any>;

  constructor(private router: Router, private postService: PostService,
              private ngxSmartModalService: NgxSmartModalService,
              private pwaService: PwaService,
              private notificationService: NotificationService
              ) {

  }

  ngOnInit() {
    this.GetPost();
  }

  ngAfterViewInit() {
    console.log(this.pwaService.promptEvent);
    if (this.pwaService.promptEvent) {
      this.showAlert();
    }
    this.notificationService.requestPermission();
  }
  GetPost() {
    this.postService.GetPost(1, localStorage.getItem('userID')).subscribe((res: Response) => {
      this.Posts = res.posts;
    });
  }

  showAlert() {
    this.ngxSmartModalService.getModal('installModal').open();
  }

  installPwa(): void {
    if (this.pwaService.promptEvent.prompt()) {
      this.showAlert();
    }
  }
}
