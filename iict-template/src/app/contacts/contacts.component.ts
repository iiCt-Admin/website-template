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
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   FormData: FormGroup;

  constructor(public translate : TranslateService,
              private builder: FormBuilder,
              private contact: ContactService,
              private appService: AppService,
              private route: ActivatedRoute) { }

  order : string = '';
	params = new Object();

  ngOnInit(): void {
    AOS.init()
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Subject: new FormControl('', [Validators.required]),
    Comment: new FormControl('', [Validators.required])
  })

  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

private contactmailApi = 'https://mailthis.to/Contact_iiCt'
  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData, this.contactmailApi)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
}
}
