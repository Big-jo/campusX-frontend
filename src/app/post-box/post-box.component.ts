import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {
  checked = true;
  post;

  constructor(private postService: PostService) { }


  check(event) {
    console.log(event);
  }

  onClick(event) {
    console.log(event);
  }

  ngOnInit() {
  }

  onPost(post){
    this.postService.CreatePost(post)
      .subscribe((res) => {
        console.log(res);
        this.post = '';
      });
  }
}
