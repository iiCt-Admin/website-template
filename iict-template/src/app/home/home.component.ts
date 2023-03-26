import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service'
import { AuthService } from '../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate : TranslateService,
    public appService : AppService, 
    public authService : AuthService, 
    private router : Router) { }

  ngOnInit(): void {
  }

  returnText(key : string, value : string){
  return this.appService.returnText(key, value);
  }


}
