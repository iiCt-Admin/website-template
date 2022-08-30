import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public translate : TranslateService, private route: ActivatedRoute) { }
	order : string = '';
	params = new Object();

  ngOnInit(): void {
	  this.route.queryParams
      .subscribe(params => {
		  this.params = params["child"];
        console.log(params["child"]); // { orderby: "price"
		//var k = Object.params.
        //this.order = params.order;
        //alert(this.order); // price
      }
    );
    //   .filter(params => params.order)
    //   .subscribe(params => {
    //     console.log(params); // { order: "popular" }
	//
    //     this.order = params.order;
	//
    //     alert(this.order); // popular
    //   }
    // );
  }

}
