import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myGroup: FormGroup

  constructor() {
    this.myGroup = new FormGroup({null: new FormControl()});
  }

  ngOnInit() {
  }

}
