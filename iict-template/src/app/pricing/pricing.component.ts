import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(public translate : TranslateService,
    public appService : AppService,
    private router : Router) { }

  ngOnInit(): void {
    AOS.init()
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

}
