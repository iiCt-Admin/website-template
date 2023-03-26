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

	  // this.firebaseService.retrieveFile("output", "/images/web.png");
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

  	// handleFileInput(files: FileList) {
    //   //this.fileToUpload =
	//   alert(files.item(0));
  	// }

openFile(event) {
   var input = event.target;

   var reader = new FileReader();
   reader.onload = () =>{
	 var dataURL = reader.result;
	 // console.log(dataURL);
	 // var output = (<HTMLImageElement>document.getElementById('output'));
	 // output.src = dataURL as string;
	 this.firebaseService.uploadFile(input.files[0].name, dataURL as string);
   };
   reader.readAsDataURL(input.files[0]);
 };

  upload(){
	  let entry1 = (<HTMLInputElement>document.getElementById("file"));
	  let entry = "c:\\windows\\image.jpg";
	  //var filename = entry.replace(/^.*[\\\/]/, '')
	  // alert(entry1);
	  // entry1.onchange = () => {
  		const selectedFile = entry1.files[0];
  		// console.log(selectedFile.name);
		// console.log(selectedFile.webkitRelativePath);
		// }
	  return;

	  if (entry.includes('\\')){
	  	const pathStrSplit = entry.split('\\')
	  	const fileName = pathStrSplit.pop()
	  	const directoryName = pathStrSplit.join('\\');
		alert("Win Path " + directoryName + " File Name " + fileName);
		return;
  		}

		if (entry.includes('/')){
		  const pathStrSplit = entry.split('/')
		  const fileName = pathStrSplit.pop()
		  const directoryName = pathStrSplit.join('/');
		  alert("*nix Path " + directoryName + " File Name " + fileName);
		  return;
		}

	  return;
  }

}
