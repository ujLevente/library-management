import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedIndex: number;

  constructor() { }

  ngOnInit() {
  }
  addClass(id: any) {
    this.selectedIndex = id;
  }

}
