import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { LegalComponent } from './legal/legal.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminComponent } from './admin/admin.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { AppService } from './services/app.service';
import { FirebaseService } from './services/firebase.service';

import { NavbarComponent } from './navbar/navbar.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    LoginComponent,
    FaqComponent,
    LegalComponent,
    HomeComponent,
    ContactsComponent,
    TeamsComponent,
    AdminComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'mytestapp'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [AuthenticationService, AppService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
