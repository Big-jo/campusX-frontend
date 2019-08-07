import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = 'Pull down to refresh';
  items = [];
  constructor() { }

  ngOnInit() {
  }

  onAction($event) {
    setTimeout(() => {
      $event.done();
      this.items.push(0);
    }, 1000);
  }

  onChangeState($event) {
    switch ($event.state) {
      case 'initial':
        this.message = 'Pull down to refresh';
        break;
      case 'preaction':
        this.message = 'Release to refresh';
        break;
      case 'action':
        this.message = 'Loading data...';
        break;
    }
  }
}
