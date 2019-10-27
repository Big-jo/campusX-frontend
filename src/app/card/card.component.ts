import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IPost } from '../interfaces/Post';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: IPost;
  @ViewChild(PlyrComponent, {static: true}) plyr: PlyrComponent;

  badge = {
    'background-color': '#082945',
  };

  videoSources: Plyr.Source[];
  constructor() {

  }


  ngOnInit() {
    // Check if post contains a video
      this.videoSources = [
        {
          src: this.post.video,
        }
      ];
  }

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.plyr.player.play();
  }


}
