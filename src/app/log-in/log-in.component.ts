import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { NotifierService } from 'angular-notifier';

interface IUser {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  userID: string;
  success: string;
  err: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  errStatement: string;
  loading = false; // State of login button
  animating = false;
  // tslint:disable-next-line: variable-name
  private _closeTimer;
  private readonly notifier: NotifierService;

  constructor(private router: Router,
              private userService: UserService,
              private storageService: StorageService,
              private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    // check local storage for token
    if (this.storageService.GetLocal('token')) {
      this.router.navigateByUrl('/main');
    }
  }

  onSubmit(form) {
    const Form: IUser = {
      email: form.email,
      password: form.password,
    };
    this.animating = !this.animating;
    this.userService.LoginUser(Form).subscribe((res: IResponse) => {
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          this.storageService.StoreLocal(key, res[key]);
        }
      }
      this.router.navigateByUrl('/main');

    }, (error) => { // TODO: Create Interface for error
      this.animating = !this.animating;
      this.errStatement = error.error.err;
      this.notifier.notify('error', this.errStatement, 'loginError');
    });
  }

  showToast() {
    this.animating = !this.animating;
    // this._closeTimer = setTimeout(() => {
    //   this.animating = !this.animating;
    // }, 1000);
  }
  // TODO: Add Error functions for
}
