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

  constructor(private http: HttpClient, private storageService: StorageService) {}
  private baseApi = 'http://localhost:3000/api/v1/post';
  private getPost = 'getposts';
  private createPost = 'create';
  private userID  = this.storageService.GetLocal('userID');

  public GetPost(Key: number, id) {
    const key = Key; // To get self-post, key is set to 0, to get others key is set to one
    return this.http.get(`${this.baseApi}/${this.getPost}/${key}/${id}`);
  }

 public CreatePost(post) {
   const postObject = {
     text: post
   };
   return this.http.post(`${this.baseApi}/${this.createPost}`, postObject);
 }

 public GetCampusPost(id) {
  return this.http.get(`${this.baseApi}/${this.getPost}/${id}`);
 }

}
