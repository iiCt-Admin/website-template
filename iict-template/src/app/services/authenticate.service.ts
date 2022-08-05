import { Injectable } from '@angular/core';
//import { initializeApp } from '@angular/fire/app'
//import { environment } from 'src/environments/environment';
import { FirebaseApp } from '@angular/fire/app/app';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(public auth: AngularFireAuth, private route: Router) { }

  create(email: string, password: string) {
      this.auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          Swal.fire(errorMessage);
          // ..
        });
    }

  async login(email: string, password: string): Promise<boolean> {

    this.auth.signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

//        this.toastMessage("Signed in successfully");

        // route to new page after login
        //  this.route.navigate(['account']);

        return true;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          Swal.fire('Wrong password');
          //alert('Wrong password.');
        } else {
          Swal.fire(errorMessage);
          // alert(errorMessage);
        }
        return false;
        console.log(error);
      });
    return false;
  }

  async logout(){
    await this.auth.signOut();
  }

}
