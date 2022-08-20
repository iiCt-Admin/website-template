import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { LegalComponent } from './legal/legal.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamsComponent } from './teams/teams.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
	{ path: 'contacts', component: ContactsComponent },
  { path: 'team', component: TeamsComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'signup', component: SignupComponent },
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
