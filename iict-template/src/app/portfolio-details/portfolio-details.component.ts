import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }
  	order : string = '';
  	params = new Object();
	param = "";

    ngOnInit(): void {
  	  this.route.queryParams
        .subscribe(params => {
  		  this.params = params["child"];
		  this.param = params["child"];
          console.log(params["child"]);
        }
      );
    }

}
