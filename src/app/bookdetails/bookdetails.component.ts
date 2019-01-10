import {Component, NgModule, OnInit} from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

@NgModule()

export class BookdetailsComponent implements OnInit {

  bookDetails: any;
  title = 'xx';

  constructor(public serverService: ServerService) {
  }

  ngOnInit() {
    // this.onGetBookDetails();
  }

  onGetBookDetails() {
    console.log('onGetBookDetails');
    this.serverService.getBookDetails().subscribe(results => this.asd(results));
    // console.log(this.bookDetails['title']);
    // this.title = this.bookDetails['OLID:OL7850499M'];
  }
  asd(details) {
    console.log('asd');
    this.title = details['OLID:OL7850499M'].title;
  }
}
