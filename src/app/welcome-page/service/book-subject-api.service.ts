import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookDataModel} from "../../model/book-data-model";
import {map, retry} from "rxjs/operators";
import {Observable} from "rxjs";
import {ServerService} from "../../server.service";

@Injectable({
  providedIn: 'root'
})
export class BookSubjectApiService {

  private baseUrl: string = 'http://openlibrary.org/search.json?';

  constructor(private http: HttpClient, private sharedService: ServerService) { }

  getBooksBySubjectAndPageNumber(subject: string, pageNum: number): Observable<BookDataModel[]> {
    if (pageNum < 0 || pageNum % 1 != 0)
      return;

    const numOfBooksDisplayed = 6;
    let offset = pageNum * numOfBooksDisplayed;
    let searchQueryUrl = `${this.baseUrl}subject=${subject}&limit=${numOfBooksDisplayed}&offset=${offset}`;

    return  this.sharedService.getBooksByQuery(searchQueryUrl);
  }

}
