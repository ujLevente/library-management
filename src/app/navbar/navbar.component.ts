import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  value;
  myGroup: FormGroup

  constructor(public serverService: ServerService) {
    this.myGroup = new FormGroup({null: new FormControl()});
  }

  ngOnInit() {
  }

  onQuickSearch() {
    const inputValue = (<HTMLInputElement>document.getElementById('qsinput')).value;
    this.serverService.quickSearch(inputValue).subscribe(results => this.qSearchResult(results));

  }

  qSearchResult(results) {
    console.log(results.docs[0].edition_key[0]);
    window.location.href = '/book/' + results.docs[0].cover_edition_key;
  }
}
