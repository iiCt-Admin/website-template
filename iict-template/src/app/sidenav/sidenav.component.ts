import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';
import { AppService } from '../services/app.service';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public translate : TranslateService, public authService : AuthenticationService, public appService : AppService, private router : Router) { }

  ngOnInit(): void {
    AOS.init()
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

  @Input() isExpanded: boolean = false;
 @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

 handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

}
