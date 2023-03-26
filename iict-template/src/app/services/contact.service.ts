import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactmailApi = 'https://mailthis.to/Contact_iiCt'
  private emailApi = 'https://mailthis.to/Email_iiCt'

  constructor(private http: HttpClient) { }

  PostMessage(input: any, mail: string) {
    return this.http.post(mail, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
