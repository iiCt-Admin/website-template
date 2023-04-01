import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service'
import { AuthService } from '../services/authentication.service';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(public appService : AppService,
    public authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    AOS.init()
  }

  returnText(key : string, value : string){
  return this.appService.returnText(key, value);
  }

}
