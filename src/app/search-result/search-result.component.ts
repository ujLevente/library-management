import { Component, OnInit } from '@angular/core';
import {BookDataModel} from "../model/book-data-model";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private searchResult: BookDataModel[];

  constructor() { }

  ngOnInit() {
  }

}
