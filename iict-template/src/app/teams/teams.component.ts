import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service';
import { ContactService } from '../services/contact.service';
import Swiper from 'swiper/bundle';
import * as AOS from 'aos';
import 'boxicons';
import 'swiper/css/bundle';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public translate : TranslateService,
              private route: ActivatedRoute,
              private builder: FormBuilder,
              private contact: ContactService,
              private appService: AppService) { }
  order : string = '';
	params = new Object();

    ngOnInit(): void {
	  this.route.queryParams
      .subscribe(params => {
		  this.params = params["child"];
        console.log(params["child"]);
      }
    );
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

}
