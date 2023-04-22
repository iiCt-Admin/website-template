import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './legal.component.html'
})


export class LegalComponent {
  @ViewChild('popupContent') popupContent: TemplateRef<any>;
closeResult = '';

constructor(public appService : AppService, private route: ActivatedRoute, private modalService: NgbModal) {}

returnText(key : string, value : string){
  return this.appService.returnText(key, value);
}

open(content) {
this.modalService.open(content,
    {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
	this.closeResult = `Closed with: ${result}`;
	}, (reason) => {
	this.closeResult =
		`Dismissed ${this.getDismissReason(reason)}`;
	}
  );
}

private getDismissReason(reason: any): string {
	if (reason === ModalDismissReasons.ESC) {
	return 'by pressing ESC';
	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	return 'by clicking on a backdrop';
	} else {
	return `with: ${reason}`;
	}
}
}
