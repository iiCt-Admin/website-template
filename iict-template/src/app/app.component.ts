import { AfterViewInit, Component } from '@angular/core';

import { AppService } from './services/app.service';

import {register} from 'swiper/element/bundle';
import {Swiper} from 'swiper/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'iict-template';
  sidebarExpanded = false;

  constructor(public appService : AppService){
	  this.appService.init();
  }

  ngAfterViewInit(): void {
    register();
  }

}
