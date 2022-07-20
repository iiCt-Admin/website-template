import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'mytestapp'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
