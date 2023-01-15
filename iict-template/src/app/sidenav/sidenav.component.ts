import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isExpanded: boolean = false;
 @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

 handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

}
