import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { NewsComponent } from './news/news.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'portfolio-details' , component: PortfolioDetailsComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
	{ path: 'news', component: NewsComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'signin',component:SigninComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
