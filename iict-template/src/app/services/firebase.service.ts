import { Injectable } from '@angular/core';

import { AppService } from './app.service';

import { initializeApp } from "firebase/app";
import { FirebaseApp } from '@angular/fire/app/app';
import firebase from 'firebase/compat/app';

import {  collection, query, where, orderBy, doc, getDoc, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import { getStorage, ref, uploadBytes, uploadString, getDownloadURL  } from "firebase/storage";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

import { Category, CategoryData } from '../model/categorys'

import { environment } from '../../environments/environment';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);
const storage = getStorage(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {



	categories = new Array<Category>();

	portfolio_list = new Array<CategoryData>();

	constructor(firestore: AngularFirestore, public appService : AppService) {

	}

	async GetCategoryList(){
		this.categories = [];
		const q = query(collection(db, "PORTFOLIO_CATEGORY"), where("Portfolio_Cat_Language", "==", this.appService.currentLanguage));

		const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
  				// doc.data() is never undefined for query doc snapshots
				this.categories.push(doc.data() as unknown as Category);
  				// console.log(doc.id, " => ", doc.data());
			});
	}

	async GetCategoryData(){

		this.portfolio_list = [];
		// where("Portfolio_Data_Category","==","app")
		const q = query(collection(db, "PORTFOLIO_DATA"), where("Portfolio_Data_Language", "==", this.appService.currentLanguage));

		const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
  				// doc.data() is never undefined for query doc snapshots
				this.portfolio_list.push(doc.data() as unknown as CategoryData);
  				// console.log(doc.id, " => ", doc.data());
			});

	}

retrieveFile(elementID : string, filename : string){

	getDownloadURL(ref(storage, filename))
  	.then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById(elementID);
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
}

	uploadFile(filename : string , fileData : string){

		const storageRef = ref(storage, "/images/" + filename);

		uploadString(storageRef, fileData, 'data_url').then((snapshot) => {
		  console.log('Uploaded a data_url string!');
		  Swal.fire("Upload of [" + filename + "] Complete");
		});



	}


}
