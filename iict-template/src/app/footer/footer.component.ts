import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  FormData: FormGroup;


  constructor(public appService : AppService,  private builder: FormBuilder,
    private contact: ContactService) { }

  ngOnInit(): void {
    let date = new Date();

    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      DateStamp: new FormControl(date.toLocaleString())
    })
  }

  returnText(key : string, value : string){
    return this.appService.returnText(key, value);
  }

  private emailApi = 'https://mailthis.to/Email_iiCt'
  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData, this.emailApi)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
}
}
