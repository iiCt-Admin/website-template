import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public translate : TranslateService, private route: ActivatedRoute) { }
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


}
