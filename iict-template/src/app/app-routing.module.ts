import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { LegalComponent } from './legal/legal.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
	{ path: 'contacts', component: ContactsComponent },
  { path: 'team', component: TeamsComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent},
  { path: 'news', component: NewsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path:'signin',component:SigninComponent}
  // { path: 'account', component: AccountComponent },
  // { path: 'self-manager-dashboard', component: SelfmanagerPageComponent },
  // { path: 'employee-dashboard', component: EmployeePageComponent },
  // { path: 'admin', component: AdminComponent },
  // { path : 'add-employee' , component: AddEmployeeComponent },

  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
