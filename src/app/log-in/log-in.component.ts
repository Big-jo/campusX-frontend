import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';

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
  constructor(private router: Router,
              private userService: UserService,
              private storageService: StorageService) { }

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

    this.userService.LoginUser(Form)
      .subscribe((res: IResponse) => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            this.storageService.StoreLocal(key, res[key]);
          }
        }
        this.router.navigateByUrl('/main');
      }, (error) => { // TODO: Create Interface for error
        console.log(error.error.err);
        this.errStatement = error.error.err;
      });
  }
}
