import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interfaces/Post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: IPost;

  badge = {
    'background-color': '#082945',
  };
  constructor() { }

  ngOnInit() {
  }


}
