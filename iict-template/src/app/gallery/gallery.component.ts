import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	filter = Array<any>();

	portfolio = [{image:"none image",alt:"none alt", title: "no title App 1", category : "App", detailsLink : "none" },
				{image:"none image",alt:"none alt", title: "no title Web 1", category : "Web", detailsLink : "none"},
				{image:"none image",alt:"none alt", title: "no title Media 1", category : "Media", detailsLink : "none"},

				{image:"none image",alt:"none alt", title: "no title App 2", category : "App", detailsLink : "none" },
				{image:"none image",alt:"none alt", title: "no title Web 2", category : "Web", detailsLink : "none"},
				{image:"none image",alt:"none alt", title: "no title Media 2", category : "Media", detailsLink : "none"}
			];

  constructor() { }

  ngOnInit(): void {
	  AOS.init();
	  this.filter = this.portfolio;
  }

  ChangeFilter(filterChange : string){
	  if (filterChange == "All") {
		  this.filter = this.portfolio;
		  return;
	  }
	  this.filter = Array<any>();
	  // Loop thru portfolio array, can be easily changed to loop
	  // thru data that comes from other sources, such as firebase
	  for(var i = 0; i < this.portfolio.length; i++){
		  if (this.portfolio[i].category == filterChange) this.filter.push(this.portfolio[i]);
	  }

  }

}
