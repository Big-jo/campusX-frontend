import {
  Injectable, EventEmitter
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  StorageService
} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  object;
  constructor(private http: HttpClient, private storageService: StorageService) {
   
  }
  private baseApi = 'http://localhost:3000/campusX/api/v1/post'
  private create = 'create';
  private getPost = 'getposts';

  public GetPost() {
    const userID = this.storageService.GetLocal('userID');
    return this.http.get(`${this.baseApi}/${this.getPost}`);
  }

  

}
