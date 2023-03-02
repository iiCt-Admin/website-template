import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	container : any;
	elements = Array<any>();
	filterElements = Array<any>();
	filter = Array<any>();

	portfolio = [{image:"none image",alt:"none alt", title: "no title App 1", category : "App" },
				{image:"none image",alt:"none alt", title: "no title Web 1", category : "Web"},
				{image:"none image",alt:"none alt", title: "no title Media 1", category : "Media"},

				{image:"none image",alt:"none alt", title: "no title App 2", category : "App" },
				{image:"none image",alt:"none alt", title: "no title Web 2", category : "Web"},
				{image:"none image",alt:"none alt", title: "no title Media 2", category : "Media"}
				// {image:"none image",alt:"none alt", title: "no title 2", category : "Web"}
			];

  constructor() { }

  ngOnInit(): void {
	  // this.container = document?.getElementById("portfolio");
	  // if (this.container) this.elements = this.container?.getElementsByTagName("div");
	  this.filter = this.portfolio;
	  // alert(this.elements.length);
	  // alert(this.portfolio.length);
  }

  copyPortfolio(){
	  for(var i = 0; i < this.portfolio.length; i++){
	  	// this.filter.
  	}
  }

  change(_change : string){
	  if (_change == "All") {
		  this.filter = this.portfolio;
		  return;
	  }
	  this.filter = Array<any>();
	  for(var i = 0; i < this.portfolio.length; i++){
		  if (this.portfolio[i].category == _change) this.filter.push(this.portfolio[i]);

		  //console.log(this.elements[i]);
	  }

	  // alert("change to " + _change);
  }

}
