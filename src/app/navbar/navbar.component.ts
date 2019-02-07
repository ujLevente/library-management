import {Component, OnInit} from '@angular/core';
import {ServerService} from "../shared/service/server.service";
import {FormsModule, FormGroup, FormControl} from '@angular/forms';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  value;
  myGroup: FormGroup;
  private authority: string;
  private roles: string[];

  constructor(public serverService: ServerService, private tokenStorage: TokenStorageService) {
    this.myGroup = new FormGroup({null: new FormControl()});
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  onQuickSearch(event) {
    if (event.key == "Enter" || event == "clicked on search") {
      const inputValue = (<HTMLInputElement>document.getElementById('qsinput')).value;
      this.serverService.redirectToSearchResults('title', inputValue);
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
