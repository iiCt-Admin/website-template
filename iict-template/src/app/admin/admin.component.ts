import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
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
