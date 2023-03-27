import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';
import { FirebaseService } from '../services/firebase.service';

// import { TranslateService } from '@ngx-translate/core';

import { Category, CategoryData } from '../model/categorys';

import * as AOS from 'aos';
import Swal from 'sweetalert2';
import 'boxicons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	filter = Array<CategoryData>();
	currentCategory = "All";

	isAdmin = false;


  portfolio = [{image:"assets/img/iiCt_Round_Light.png",alt:"alt App 1", title: "no title App 1", category : "App", detailsLink : "none" },
				{image:"assets/img/iiCt_contact.png",alt:"alt Web 1", title: "no title Web 1", category : "Web", detailsLink : "none"},
				{image:"assets/img/iiCt_Round_Plain.png",alt:"alt Media 1", title: "no title Media 1", category : "Media", detailsLink : "none"},
				{image:"assets/img/iiCt_chat.png",alt:"alt App 2", title: "no title App 2", category : "App", detailsLink : "none" },
				{image:"assets/img/iiCt_email.png",alt:"alt Web 2", title: "no title Web 2", category : "Web", detailsLink : "none"},
				{image:"assets/img/iiCt_menu.png",alt:"alt Media 2", title: "no title Media 2", category : "Media", detailsLink : "none"},
        {image:"assets/img/iiCt_support.png",alt:"alt App 3", title: "no title App 3", category : "App", detailsLink : "none" },
				{image:"assets/img/lang_en.png",alt:"alt Web 3", title: "no title Web 3", category : "Web", detailsLink : "none"},
				{image:"assets/img/lang_fr.png",alt:"alt Media 3", title: "no title Media 3", category : "Media", detailsLink : "none"},
			];

  constructor(public appService : AppService, public firebaseService : FirebaseService){
  }
	// can re-add this if needed
  //,  public translate : TranslateService) { }

  async ngOnInit(): Promise<void> {
	  AOS.init();
	  this.filter = this.firebaseService.portfolio_list;
	  await this.firebaseService.GetCategoryList();
	  await this.firebaseService.GetCategoryData();
	  await this.ChangeFilter(this.currentCategory);
	  this.appService.refreshGallery.on(true,async ()=>{
		  await this.ChangeFilter(this.currentCategory);
	  })
	  // this.getCategoryName("All");

	  // this.firebaseService.retrieveFile("output", "/images/web.png");
	  // console.log(this.appService.newTranslate("this is an example"));
  }

  edit(port : CategoryData){

  }

  add(){

  }

  remove(port : CategoryData){

  }

  preview(port : CategoryData){
	  var index = this.getLanguageIndex(port.Languages);
	  Swal.fire("Preview of " + port.Descriptions[index]);
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

getLanguageIndex(item : Array<string>):number{
	for(let i = 0; i < item.length; i++){
		if (item[i] == this.appService.currentLanguage){
			return i;
		}
	}
	return 0;
}
  getPortfolioTitle(name : string) : string {
	  var index = 0;
	  for(let i = 0; i < this.firebaseService.portfolio_list.length; i++){
		var item = this.firebaseService.portfolio_list as Array<CategoryData>;

		// console.log(item);
		let item2 = item[i].Languages;
		index = this.getLanguageIndex(item2);
		if (item[i].Portfolio_Data_Title == name) return item[i].Titles[index];
	  }
	  return "";
  }

  getPortfolioAltText(name : string) : string {
	  var index = 0;
	  for(let i = 0; i < this.firebaseService.portfolio_list.length; i++){
		var item = this.firebaseService.portfolio_list as Array<CategoryData>;

		let item2 = item[i].Languages;
		index = this.getLanguageIndex(item2);
		if (item[i].Portfolio_Data_Title == name) return item[i].AltTexts[index];
	  }
	  return "";
  }

  getCategoryName(name : string) : string {
	  var index = 0;
	  for(let i = 0; i < this.firebaseService.categories.length; i++){
		var item = this.firebaseService.categories as Array<Category>;
		let item2 = item[i].Portfolio_Cat_Languages;
		index = this.getLanguageIndex(item2);
		if (item[i].Portfolio_Cat_Sort == name) return item[i].Portfolio_Cat_Names[index];
	  }
	  return "";

  }

	// CategoryTranslate(category: string) : string {
	//
	// 	if (category != undefined){
	// 		var cat_title = "Gallery_filter_" + category.toLowerCase();
	// 		return this.returnText("GALLERY", cat_title);
	// 	}
	//
	// 	return "";
	// }

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

openFile(event) {
   var input = event.target;

   var reader = new FileReader();
   reader.onload = () =>{
	 var dataURL = reader.result;

	 this.firebaseService.uploadFile(input.files[0].name, dataURL as string);
   };
   reader.readAsDataURL(input.files[0]);
 };

}
