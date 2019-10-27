import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private baseApi = 'http://localhost:3000/api/v1/users';
  private getCampuses = 'getcampuses';

  constructor(private http: HttpClient) { }

  GetCampuses() {
    return this.http.get(`${this.baseApi}/${this.getCampuses}`);
  }
}
