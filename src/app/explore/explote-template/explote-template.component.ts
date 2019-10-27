import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/interfaces/Post';
import { Location } from '@angular/common';

interface IParams extends ParamMap{
  params: {
    id: string
  };
}

interface IResponse {
  PIS: number;
  posts: Array<IPost>;
}
@Component({
  selector: 'app-explote-template',
  templateUrl: './explote-template.component.html',
  styleUrls: ['./explote-template.component.css']
})
export class ExploteTemplateComponent implements OnInit {
  Posts: Array<IPost>;
  Campus: string;
  constructor(private route: ActivatedRoute, private postService: PostService, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: IParams) => {
      this.Campus = params.params.id;
      this.postService.GetCampusPost(params.params.id)
        .subscribe((res: IResponse) => {
          this.Posts = res.posts;
        });
    });
  }

  private PreviousPage() {
    this.location.back();
  }

}
