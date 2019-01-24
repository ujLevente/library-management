import { Component, OnInit } from '@angular/core';
import {BookDataModel} from "../shared/model/book-data-model";
import {ServerService} from "../shared/service/server.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private searchResult: BookDataModel[];
  private baseUrl = "http://openlibrary.org/search.json?";
  constructor(private sharedService: ServerService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    let searchUrl = `${this.baseUrl}title=${this.sharedService.quickSearchString}`;
    this.sharedService.getBooksByQuery(searchUrl, 30, 0).subscribe(
      res => this.searchResult = res
    )
  }
}
