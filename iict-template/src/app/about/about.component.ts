import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service';
import { ContactService } from '../services/contact.service';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public translate : TranslateService,
              private contact: ContactService,
              private appService: AppService,
              private route: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

}
