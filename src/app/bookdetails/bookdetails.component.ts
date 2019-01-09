import {Component, OnInit} from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {

  contents: string;

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
  }

  onGetBookDetails() {
    console.log('onGetBookDetails');
    this.serverService.getBookDetails().subscribe(results => this.contents = results);
    console.log(this.contents);
  }

}
