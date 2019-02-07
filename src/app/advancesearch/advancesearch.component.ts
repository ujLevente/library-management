import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {

  title: string;
  author: string;
  isbn: string;
  subject: string;
  place: string;
  person: string;
  publisher: string;

  constructor() { }

  ngOnInit() {
  }

  advanceSearchHandle(): void {

  }

}

