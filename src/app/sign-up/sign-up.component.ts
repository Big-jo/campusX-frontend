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

interface ICampus {
  Name: string;
  Abbreviation: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  campuses: ICampus[];
  university: string;
  constructor(private userService: UserService, private router: Router, private storageService: StorageService) {
    this.university = '';

    this.campuses = [
      // {
      //       Name: 'Adekunle Ajasin University',
      //       Abbreviation: 'AAUA',
      // },
      // {
      //       Name: 'Federal University Of Agriculture',
      //       Abbreviation: 'FUNAAB',
      // },
      // {
      //       Name: 'Abia State University',
      //       Abbreviation: ' ABSU',
      // },
      // {
      //       Name: 'Adekunle Ajasin University',
      //       Abbreviation: 'AAUA',
      // },
      // {
      //       Name: 'Joseph Ayo Babalola University',
      //       Abbreviation: 'JABU',
      // },
      // {
      //       Name: 'Redeemer/s University Nigeria',
      //       Abbreviation: ' RUN',
      // },
      {
        Name: 'Afe Babalola University',
        Abbreviation: 'ABUAD',
      },
      // {
      //       Name: 'Akwa Ibom State University',
      //       Abbreviation: 'AKSU',
      // },
      // {
      //       Name: 'American University Of Nigeria',
      //       Abbreviation: 'AUN',
      // },
      // {
      //       Name: 'Abubakar Tafawa Balewa University',
      //       Abbreviation: 'ATBU',
      // },
      // {
      //       Name: 'Adamawa State University',
      //       Abbreviation: 'ADSU',
      // },
      // {
      //       Name: 'Achievers University',
      //       Abbreviation: 'AC',
      // },
      // {
      //       Name: ' Al-Hikmah University',
      //       Abbreviation: 'AHU',
      // },
      // {
      //       Name: 'Ambrose Ali University',
      //       Abbreviation: 'AAU',
      // },
      // {
      //       Name: 'Anambra State University',
      //       Abbreviation: 'ANSU',
      // },
      // {
      //       Name: 'Ajayi Crowther University',
      //       Abbreviation: 'ACU',
      // },
      // {
      //       Name: 'Bayero University',
      //       Abbreviation: 'BUK',
      // },
      {
        Name: 'Babcock University',
        Abbreviation: 'BU',
      },
      {
        Name: 'Bells University Of Technology',
        Abbreviation: 'BUT',
      },
      // {
      //       Name: 'Benson Idahosa University Of Technology',
      //       Abbreviation: 'BIU',
      // },
      // {
      //       Name: 'Benue State University',
      //       Abbreviation: 'BSU',
      // },
      // {
      //       Name: 'ECWA Bingham University',
      //       Abbreviation: 'BU',
      // },
      // {
      //       Name: 'Bowen University ',
      //       Abbreviation: 'BU',
      // },
      // {
      //       Name: 'Bukar Abba Ibrahim University',
      //       Abbreviation: 'YSU',
      // },
      // {
      //       Name: 'Caleb University',
      //       Abbreviation: 'CUI',
      // },
      // {
      //       Name: 'Landmark University',
      //       Abbreviation: 'LU',
      // },
      // {
      //       Name: 'Nigerian Turkish Nile University',
      //       Abbreviation: ' Abbv',
      // },
      {
        Name: 'University Of Lagos',
        Abbreviation: ' UNILAG',
      },
      // {
      //       Name: 'University Of Nigeria Nsukka',
      //       Abbreviation: 'UNN',
      // },
      {
        Name: 'Convenant University',
        Abbreviation: 'CU',
      },
    ];
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.university);

    const Form: IUser = {
      email: form.email,
      gender: this.CheckGender(form.male, form.female),
      name: form.name,
      password: form.password,
      university: this.university,
      userTag: `@${form.userTag}`,
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

  onChange(uni) {
    this.university = uni;
  }
  // TODO: Check if email exist before moving on to the other component
}
