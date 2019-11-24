import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';

interface IParams extends ParamMap {
  params: {
    postID: string
  };
}


@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {
  checked = true;
  post;
  postID;
  originPost;

  constructor(private postService: PostService, private location: Location, private route: ActivatedRoute) {
  }


  check(event) {
    console.log(event);
  }

  onClick(event) {
    console.log(event);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: IParams) => {
      this.postID = params.params.postID;
      // this.originPost = params.params.
    });
  }

  onPost(post) {
    // For comments
    if (post && this.postID) {
      this.postService.Comment(this.postID, post).subscribe((res) => {
        this.post = '';
      });
    }
    // For a normal post
    if (post && (this.postID === 0)) {
      this.postService.CreatePost(post)
        .subscribe((res) => {
          console.log(res);
          this.post = '';
        });
    }
  }

  PreviousPage() {
    this.location.back();
  }

//  FIXME: If you like and unlike and then like back, it still likes the post.
//  TODO: Add notifications on successful operations
}
