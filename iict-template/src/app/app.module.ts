import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { LegalComponent } from './legal/legal.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminComponent } from './admin/admin.component';

// Services

import { AppService } from './services/app.service';
import { FirebaseService } from './services/firebase.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { HeroComponent } from './hero/hero.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FaqComponent,
    LegalComponent,
    HomeComponent,
    ContactsComponent,
    TeamsComponent,
    AdminComponent,
    NavbarComponent,
    SignupComponent,
    SidenavComponent,
    AboutComponent,
    NewsComponent,
    GalleryComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
    NgbModule,
  ],
  providers: [ AppService, FirebaseService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
