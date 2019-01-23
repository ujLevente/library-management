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

  constructor(private sharedService: ServerService) { }

  ngOnInit() {
    this.sharedService.getBooksByQuery("http://openlibrary.org/search.json?title=ring").subscribe(
      res => this.searchResult = res
    )
  }


}
