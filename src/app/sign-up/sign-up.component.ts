import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
interface IUser {
  name: string;
  email: string;
  password: string;
  userTag: string;
  university: string;
  gender: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private storageService: StorageService) { }

  ngOnInit() {
  }

  onSubmit(form) {

    const Form: IUser = {
      email: form.email,
      gender: this.CheckGender(form.male, form.female),
      name: form.name,
      password: form.password,
      university: form.university,
      userTag: form.userTag,
    };
    this.userService.send(Form);
    this.router.navigateByUrl('/userprofile');
  }

  private CheckGender(male, female) {
    if (male === true) {
      return 'male';
    } else {
      return 'female';
    }
  }
  // TODO: Check if email exist before moving on to the other component
}
