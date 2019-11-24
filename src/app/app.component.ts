import {Component} from '@angular/core';
import {PwaService} from './services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campusX';

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      // this.pwaService.promptEvent = event;
    });
  }

}
