import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseApi = environment.baseApi;
  private avatar = 'avatar';
  private upload = 'upload';
  constructor(private http: HttpClient) { }

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.baseApi}/users/${this.avatar}/${this.upload}`, formData);
  }
}
