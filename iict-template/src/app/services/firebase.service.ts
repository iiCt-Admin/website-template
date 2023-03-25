import { Injectable } from '@angular/core';

import { FirebaseApp } from '@angular/fire/app/app';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';

import { Category, CategoryData } from '../model/categorys'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	constructor(firestore: AngularFirestore) {


	}


}
