import { Component, OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import { AuthService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public translate : TranslateService,  public authService: AuthService) { }

  ngOnInit(): void {
  }

}
