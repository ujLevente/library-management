import {Component, OnInit} from '@angular/core';
import {ServerService} from '../shared/service/server.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchString: string;

  constructor(public serverService: ServerService) {
  }

  ngOnInit() {
  }

  onQuickSearch(event) {
    if (event.key == "Enter") {
      const inputValue = (<HTMLInputElement>document.getElementById('qsinput')).value;
      this.serverService.quickSearchString = inputValue;
      this.serverService.redirectToSearchResults();
    }
  }

}
