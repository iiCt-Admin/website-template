import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { NewsComponent } from './news/news.component';
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
  { path: 'home', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
	{ path: 'news', component: NewsComponent},
  { path: 'signin',component:SigninComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'teams', component: TeamsComponent }

  // { path: 'account', component: AccountComponent },
  // { path: 'self-manager-dashboard', component: SelfmanagerPageComponent },
  // { path: 'employee-dashboard', component: EmployeePageComponent },
  // { path : 'add-employee' , component: AddEmployeeComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
