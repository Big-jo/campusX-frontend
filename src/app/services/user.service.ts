import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseApi = 'http://localhost:3000/campusx/api/v1';
 private user = 'users';
 private getUser = 'getUser';

  private Source = new BehaviorSubject('default');
  Current = this.Source.asObservable();
  constructor(private http: HttpClient, private storageService: StorageService) {}

  private userID = this.storageService.GetLocal('userID');

  public CreateUser(form) {
    return this.http.post(`${this.baseApi}/${this.user}/create`, form);
  }

  public LoginUser(form) {
    return this.http.post(`${this.baseApi}/${this.user}/login`, form);
  }

  send(object) {
    this.Source.next(object);
  }

  public GetUserInfo() {
    return this.http.get(`${this.baseApi}/${this.user}/${this.getUser}/${this.userID}/me`);
  }

}
