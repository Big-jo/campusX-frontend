import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    direction: '',
    endReachedRefresh: false,
    height: 500,
    data: [],
    directionName: 'both up and down'
  };
  dtPullToRefreshStyle = { height: this.state.height + 'px' };

  message = 'Pull down to refresh';
  items = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  pullToRefresh(event) {
    if (event === 'endReachedRefresh') {
      if (null) {

        this.state.refreshState.currentState = 'release';
        setTimeout(() => {
          this.state.refreshState.currentState = 'finish';
        }, 1000);
      }
    } else {
      if (event === 'down') {
        this.state.data = [];

      } else {
        if (null) {

        }
      }
    }
  }


  onClick(){
    this.router.navigateByUrl('/post');
  }
}
