import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseApi = 'http://localhost:3000/campusx/api/v1';
 private user = 'users';

  private Source = new BehaviorSubject('default');
  Current = this.Source.asObservable();
  constructor(private http: HttpClient) {}

  public CreateUser(form) {
    return this.http.post(`${this.baseApi}/${this.user}/create`, form);
  }

  public LoginUser(form) {
    return this.http.post(`${this.baseApi}/${this.user}/login`, form);
  }

  send(object) {
    this.Source.next(object);
  }

}
