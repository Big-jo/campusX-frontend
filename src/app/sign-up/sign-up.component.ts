import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  constructor(form: FormsModule) { }

  ngOnInit() {
  }

  onSubmit(form){
    
    const Form: IUser = {
      email: form.email,
      gender: this.CheckGender(form.male, form.female),
      name: form.name,
      password: form.password,
      university: form.university,
      userTag: form.userTag,
    };
    console.log(Form);
    
    // TODO: Create user service

  }

  private CheckGender(male, female) {
    if (male === true){
      return 'male';
    } else {
      return 'female';
    }
  }
}
