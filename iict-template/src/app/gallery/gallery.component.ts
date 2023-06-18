import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { FirebaseService } from '../services/firebase.service';
import { Category, CategoryData } from '../model/categories';
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

  constructor(public appService : AppService, public firebaseService : FirebaseService){
  }
	// can re-add this if needed
  //,  public translate : TranslateService) { }

  async ngOnInit(): Promise<void> {
	  AOS.init();
	  // register();
	  this.filter = this.firebaseService.portfolio_list;
	  await this.firebaseService.GetCategoryList();
	  await this.firebaseService.GetCategoryData();
	  await this.ChangeFilter(this.currentCategory);
	  this.appService.refreshGallery.on(true,async ()=>{
		  await this.ChangeFilter(this.currentCategory);
	  })
    console.log(this.getCategoryName("All"))
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

  preview(port : CategoryData){
	  var index = this.getLanguageIndex(port.Portfolio_Data_Languages);
	  Swal.fire("Preview of " + port.Portfolio_Data_Category[index]);
  }

    edit(port : CategoryData){

  }

  add(){

  }

  remove(port : CategoryData){

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

  getPortfolioTitle(name: string[]): string {
  let index = 0;
  for (let i = 0; i < this.firebaseService.portfolio_list.length; i++) {
    const item = this.firebaseService.portfolio_list[i] as CategoryData;
    const item2 = item.Portfolio_Data_Languages;
    index = this.getLanguageIndex(item2);

    if (item.Portfolio_Data_titles.some(title => name.includes(title))) {
      return item.Portfolio_Data_titles[index];
    }
  }
  return '';
}

  getPortfolioAltText(name : string[]) : string {
	  var index = 0;
	  for(let i = 0; i < this.firebaseService.portfolio_list.length; i++){
		var item = this.firebaseService.portfolio_list as Array<CategoryData>;

		let item2 = item[i].Portfolio_Data_Languages;
		index = this.getLanguageIndex(item2);
		if (item[i].Portfolio_Data_titles.some(title => name.includes(title))) return item[i].Portfolio_Data_altText[index];
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
