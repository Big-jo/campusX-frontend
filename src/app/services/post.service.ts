import {
  Injectable, EventEmitter
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  StorageService
} from './storage.service';
import { environment } from 'src/environments/environment';
import {IPost} from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient, private storageService: StorageService) {}
  private baseApi = environment.postBaseApi;
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

 public LikePost(postID) {
   return this.http.post(`${this.baseApi}/like`, {postID});
 }

 public DislikePost(postID) {
  return this.http.post(`${this.baseApi}/dislike`, {postID});
}

public TrashPost(postID) {
  return this.http.post(`${this.baseApi}/trash`, {postID});
}

  public GetComments(postID) {
    return this.http.get<IPost[]>(`${this.baseApi}/comments/${postID}`);
  }

  public Comment(PostID: string, comment: string) {
    return this.http.post(`${this.baseApi}/createcomment`, {comment, PostID});
  }
}
