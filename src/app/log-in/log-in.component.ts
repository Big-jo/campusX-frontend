import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { MainComponent } from '../main/main.component';

interface IUser {
  email: string;
  password: string;
}
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const Form: IUser = {
      email: form.email,
      password: form.password,
    };
    // this.navigator.element.pushPage(LogInComponent, {animation: 'slide'});
    this.router.navigateByUrl('/main');
  }
  // TODO: Get token and store in local storage, if token isnt availbale re-route back here
}
