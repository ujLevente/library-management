import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDataModel} from "../shared/model/book-data-model";
import {ServerService} from "../shared/service/server.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private searchResult: BookDataModel[];
  private baseUrl = "http://openlibrary.org/search.json?";
  private queryData: string[] = [];

  constructor(private sharedService: ServerService, route: ActivatedRoute) {
    this.subscriptions.push(
      route.queryParams.subscribe(params => {
        Object.keys(params).forEach(key => this.queryData.push(key + "=" + params[key]) )
      })
    );
  }

  ngOnInit() {
    this.search();
  }

  search() {
    let searchUrl = this.baseUrl + this.queryData.join("&");
    this.subscriptions.push(
      this.sharedService.getBooksByQuery(searchUrl, 30, 0).subscribe(
      res => this.searchResult = res
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
