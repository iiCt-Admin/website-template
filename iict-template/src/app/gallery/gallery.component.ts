import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';
import { FirebaseService } from '../services/firebase.service';

import { Category, CategoryData } from '../model/categorys';

import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	filter = Array<CategoryData>();
	currentCategory = "All";

	// portfolio = [
	// 	{
	// 		image:"assets/img/iiCt_Round_Light.png",
	// 		alt:"none alt",
	// 		title: "no title App 1",
	// 		category : "app",
	// 		detailsLink : "none"
	// 	},
	// 	{
	// 		image:"none image",
	// 		alt:"none alt",
	// 		title: "no title Web 1",
	// 		category : "web",
	// 		detailsLink : "none"
	// 	},
	// 	{
	// 		image:"none image",
	// 		alt:"none alt",
	// 		title: "no title Media 1",
	// 		category : "media",
	// 		detailsLink : "none"
	// 	},
	//
	// 	{
	// 		image:"none image",
	// 		alt:"none alt",
	// 		title: "no title App 2",
	// 		category : "app",
	// 		detailsLink : "none"
	// 	},
	//
	// 	{
	// 		image:"none image",
	// 		alt:"none alt",
	// 		title: "no title Web 2",
	// 		category : "web",
	// 		detailsLink : "none"
	// 	},
	// 	{
	// 		image:"none image",
	// 		alt:"none alt",
	// 		title: "no title Media 2",
	// 		category : "media",
	// 		detailsLink : "none"
	// 	}
	// ];

  constructor(public appService : AppService, public firebaseService : FirebaseService) { }

  async ngOnInit(): Promise<void> {
	  AOS.init();
	  this.filter = this.firebaseService.portfolio_list;
	  await this.firebaseService.GetCategoryList();
	  await this.firebaseService.GetCategoryData();
	  await this.ChangeFilter(this.currentCategory);
	  this.appService.refreshGallery.on(true,async ()=>{
		  await this.ChangeFilter(this.currentCategory);
	  })
	  // console.log(this.appService.newTranslate("this is an example"));
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

	CategoryTranslate(category: string) : string {

		if (category != undefined){
			var cat_title = "Gallery_filter_" + category.toLowerCase();
			return this.returnText("GALLERY", cat_title);
		}

		return "";
	}

  ChangeFilter(filterChange : string){
	  // Store category filter
	  this.currentCategory = filterChange;
	  if (filterChange == "All") {
		  this.filter = this.firebaseService.portfolio_list;
		  return;
	  }
	  this.filter = Array<CategoryData>();
	  // Loop thru portfolio array, can be easily changed to loop
	  // thru data that comes from other sources, such as firebase
	  for(var i = 0; i < this.firebaseService.portfolio_list.length; i++){
		  if (this.firebaseService.portfolio_list[i].Portfolio_Data_Category == filterChange) this.filter.push(this.firebaseService.portfolio_list[i]);
	  }

  }

}
