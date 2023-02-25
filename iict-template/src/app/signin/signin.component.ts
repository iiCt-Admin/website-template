import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }
  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
    }
}
