import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app.service';
import { ContactService } from '../services/contact.service';
import * as AOS from 'aos';
import 'boxicons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    constructor(public translate : TranslateService,
                private builder: FormBuilder,
                private contact: ContactService,
                private appService: AppService,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  returnText(key : string, value : string){
  return this.appService.returnText(key, value);
  }

}
