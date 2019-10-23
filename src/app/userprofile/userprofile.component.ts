import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserService
} from '../services/user.service';
import {
  StorageService
} from '../services/storage.service';

interface IResponse {
  exists: string;
  userID: string;
  token: string;
  success: string;
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  Questions;
  Displayed;
  answer;
  i = 0;
  signUpForm;
  // Answers: string [];
  constructor(private router: Router, private userService: UserService, private storageService: StorageService) {
    this.Questions = [{
        q: 'What Level Are You In',
        a: this.answer
      },
      {
        q: 'What\'s Your Department',
        a: this.answer
      },
      {
        q: 'Your Bio',
        a: this.answer
      }
    ];
    this.Displayed = this.Questions[0].q;
  }

  ngOnInit() {
    this.userService.Current.subscribe((data) => {
      console.log(data, 'data');
      this.signUpForm = data;
    });
  }

  onNext(answer) {
    console.log(this.Questions.length - 1, this.i);
    if (this.i <= (this.Questions.length - 1)) {
      try {
        console.log(this.Questions[this.i].a);
        this.Questions[this.i].a = answer;
        this.i++;
        this.Displayed = this.Questions[this.i].q;
        this.answer = '';
        console.log(this.Questions);
      } catch (error) {
        console.log(this.Questions);
        // package a send in request
        const userProfile = {
          level: this.Questions[0].a,
          department: this.Questions[1].a,
          bio: this.Questions[2].a,
          university: this.signUpForm.university,
          gender: this.signUpForm.gender,
        };
        // Join both forms
        const form = {
          user: this.signUpForm,
          userProfile
        };
        console.log(form);

        this.userService.CreateUser(form)
          .subscribe((res: IResponse) => {
            this.CheckResponse(res);
          });
      }
    } else {

    }
  }

  private CheckResponse(res: IResponse) {
    if (res.exists != null) {
      this.router.navigateByUrl('/login');
    } else {
      // Reroute to profile creation component
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          console.log(res[key]);
          this.storageService.StoreLocal(key, res[key]);
        }
      }
      this.router.navigateByUrl('/main');
    }
  }
}
