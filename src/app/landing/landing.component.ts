import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  token: string;
  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
   }

  ngOnInit() {
    if (this.token) {
      this.router.navigateByUrl('/login');
    }
  }

}
