import { Component, OnInit } from '@angular/core';

import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];

  constructor( private sideBarService: SideBarService ) { 

    this.menuItems = sideBarService.menu;    

  }

  ngOnInit(): void {
  }

}
