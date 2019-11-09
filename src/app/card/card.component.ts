import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IPost } from '../interfaces/Post';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { ThrowStmt } from '@angular/compiler';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: IPost;
  @ViewChild(PlyrComponent, { static: true }) plyr: PlyrComponent;

  badge = {
    'background-color': '#082945',
  };

  // Reactions
  like = false;
  dislike = false;
  trash = false;

  userID;
  videoSources: Plyr.Source[];
  constructor(private postService: PostService) {
    this.userID = localStorage.getItem('userID');
  }


  ngOnInit() {
    this.post.likedBy.includes(this.userID) ? this.like = true : this.like = false ;

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

  LikePost(post: IPost) {
    if (this.dislike) {
      this.dislike = false;
      this.post.dislikes--;
    }
    if (this.trash) {
      this.trash = false;
      this.post.trash--;
    }

    if (this.like) {
      this.like = !this.like;
      this.post.likes--;

    } else {
      this.postService.LikePost(post._id).subscribe((res: any) => {
        console.log(res);
        this.like = !this.like;
        this.post.likes++;

      }, (error) => {

        console.log(error);

      });
    }
  }

  DislikePost(post: IPost) {
    if (this.like) {
      this.like = false;
      this.post.likes--;
    }

    if (this.dislike) {
      this.dislike = !this.dislike;
      this.post.dislikes--;

    } else {
      this.postService.DislikePost(post._id).subscribe((res: any) => {
        this.dislike = !this.dislike;
        this.post.dislikes++;

      }, (error) => {
        console.log(error);

      });
    }
  }

  TrashPost(post: IPost) {
    if (this.like) {
      this.like = false;
      this.post.likes--;
    }

    if (this.trash) {
      this.trash = !this.trash;
      this.post.trash--;
    } else {
      this.postService.TrashPost(post._id).subscribe((res: any) => {
       this.trash = !this.trash;
       this.post.trash++;

      }, (error) => {console.log(error);
      });
    }
  }
}
