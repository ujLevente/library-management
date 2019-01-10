import {Component, NgModule, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {extractStyleParams} from '@angular/animations/browser/src/util';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

@NgModule()

export class BookdetailsComponent implements OnInit {

  bookDetails: any;
  title = 'xx';
  author = '';
  coverId = '';
  subjects = '';
  authors = [];
  authorsName = [];
  publishDate = '';
  language = 'english';
  publishers = '';
  format = '';
  dimensions = '';
  pages = '';
  weight = '';
  olID = 'OLID:OL9724026M';
  data;

  constructor(public serverService: ServerService, route: ActivatedRoute) {
    console.log(route.snapshot.params['olId']);
    console.log('route.snapshot.params[\'olId\'];');
    this.olID = route.snapshot.params['olId'];
  }


  ngOnInit() {
    this.onGetBookDetails();
  }

  onGetBookDetails() {
    console.log('onGetBookDetails');
    this.serverService.getBookDetails(this.olID).subscribe(results => this.asd(results));
    // console.log(this.bookDetails['title']);
    // this.title = this.bookDetails[this.olID];
  }

  asd(details) {
    console.log(this.olID);

    this.title = details[this.olID].details.title;
    this.author = details[this.olID].details.authors['0'].name;
    this.coverId = details[this.olID].details.covers['0'];

    for (const subject of details[this.olID].details.subjects) {
      this.subjects += subject + ', ';
    }
    this.subjects = this.subjects.slice(0, -2);

    this.authors = details[this.olID].details.authors;
    this.publishDate = details[this.olID].details.publish_date;

    for (const publisher of details[this.olID].details.publishers) {
      this.publishers += publisher + ', ';
    }
    this.publishers = this.publishers.slice(0, -2);

    this.format = details[this.olID].details.physical_format;
    this.dimensions = details[this.olID].details.physical_dimensions;
    this.pages = details[this.olID].details.number_of_pages;
    this.weight = details[this.olID].details.weight;

  }
}
