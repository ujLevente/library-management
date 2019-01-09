import {Component, OnInit} from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
  }

  onGetBookDetails() {
    console.log('onGetBookDetails');
    console.log(this.serverService.getBookDetails());
  }

}
