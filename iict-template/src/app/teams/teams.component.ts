import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';
import { ContactService } from '../services/contact.service';
import * as AOS from 'aos';
import 'boxicons';
// import Swiper from 'swiper/swiper';
// import 'swiper/swiper';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private builder: FormBuilder,
              private contact: ContactService,
              private appService: AppService) { }
  order : string = '';
	params = new Object();
  // const swiper = new Swiper(.Swiper);

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
