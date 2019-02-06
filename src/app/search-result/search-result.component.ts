import { Component, OnInit } from '@angular/core';
import {BookDataModel} from "../shared/model/book-data-model";
import {ServerService} from "../shared/service/server.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private searchResult: BookDataModel[];
  private searchBy: string;
  private searchString: string;
  private baseUrl = "http://openlibrary.org/search.json?";
  constructor(private sharedService: ServerService, route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      this.searchString = params['q'];
      this.searchBy = params['searchBy'];
    });
  }

  ngOnInit() {
    this.search();
  }

  search() {
    let searchUrl = `${this.baseUrl}${this.searchBy}=${this.searchString}`;
    console.log(searchUrl);
    this.sharedService.getBooksByQuery(searchUrl, 30, 0).subscribe(
      res => this.searchResult = res
    )
  }
}
