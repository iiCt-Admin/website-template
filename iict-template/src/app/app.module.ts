import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TeamsComponent } from './teams/teams.component';

// access firebase config from environment
import { environment } from '../environments/environment';

// Services

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { ContactService } from './services/contact.service';
import { FirebaseService } from './services/firebase.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import 'boxicons';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AboutComponent,
    AdminComponent,
    AppComponent,
    ContactsComponent,
    FaqComponent,
    FooterComponent,
    GalleryComponent,
    HeroComponent,
    HomeComponent,
    LegalComponent,
    NavbarComponent,
    NewsComponent,
    PortfolioDetailsComponent,
    PricingComponent,
    ProductsComponent,
    SidenavComponent,
    SigninComponent,
    SignupComponent,
    TeamsComponent

  ],
  imports: [
    BrowserModule,
	// SwiperModule,
    ReactiveFormsModule,
	HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  }),
	// register(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'mytestapp'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule,

  ],
  providers: [ AppService, FirebaseService, ContactService],
  bootstrap: [AppComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
