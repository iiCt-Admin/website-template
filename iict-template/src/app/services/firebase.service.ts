import { Injectable } from '@angular/core';

import { AppService } from './app.service';

import { initializeApp } from "firebase/app";
import { FirebaseApp } from '@angular/fire/app/app';
import firebase from 'firebase/compat/app';

import {  collection, query, where, orderBy, doc, getDoc, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';

import { Category, CategoryData } from '../model/categorys'

import { environment } from '../../environments/environment';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

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


}
