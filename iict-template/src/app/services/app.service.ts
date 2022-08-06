import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router : Router) { }

  switch(page : string): void {
	   this.router.navigate([page]);
  }
}
