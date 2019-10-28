import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// export interface ICampuses {
//   // campuses: [
//   //   {
//   //     _id: string;
//   //     Name: string;
//   //     Abbreviation: string;
//   //   }
// }

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  private baseApi = environment.baseApi;
  private getCampuses = 'getcampuses';

  constructor(private http: HttpClient) { }

  GetCampuses() {
    return this.http.get(`${this.baseApi}/${this.getCampuses}`);
  }
}
