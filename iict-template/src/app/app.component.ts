import { Component } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iict-template';
  sidebarExpanded = true;

  constructor(public appService : AppService){
	  this.appService.loadDefaultTranslations();
  }

}
