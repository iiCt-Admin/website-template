import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  async handleLogin(): Promise<void> {
    var email = (<HTMLInputElement>document.getElementById('inputEmail')).value;
    var password = (<HTMLInputElement>document.getElementById('inputPassword')).value;
    //var good: boolean = await this.authService.login(email, password);

  }

}
