import { Component, OnInit } from '@angular/core';
import { CampusService } from '../services/campus.service';

interface ICampus {
  campus: {
        _id: string;
        Name: string;
        Abbreviation: string;
      };
}
interface IResponse {
  campuses: ICampus[];
}
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
   Campuses;

  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.campusService.GetCampuses()
      .subscribe((res: IResponse) => {
        console.log(res);
        this.Campuses = res.campuses;
      });
  }

}
