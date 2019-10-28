import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseApi = environment.baseApi;
  private image = 'image';
  private upload = 'upload';
  constructor(private http: HttpClient) { }

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.baseApi}/${this.image}/${this.upload}`, formData);
  }
}
