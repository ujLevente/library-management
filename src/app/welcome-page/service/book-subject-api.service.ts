import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookDataModel} from "../model/book-data-model";
import {map, retry} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookSubjectApiService {

  private baseUrl: string = 'http://openlibrary.org/search.json?';

  constructor(private http: HttpClient) { }

  private optimizeBookData(data: BookDataModel): BookDataModel {

    let book: BookDataModel = {
      title: data.title,
      author_name: data.author_name,

      cover_i: data.cover_i == null ?
      "/assets/img/cover-missing.jpg" :
      `http://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`
    };
    return book;
  }

  getBooksBySubjectAndPageNumber(subject: string, pageNum: number): Observable<BookDataModel[]> {
    if (pageNum < 1 || pageNum % 1 != 0)
      return;

    // construct url
    const numOfBooksDisplayed = 5;
    let dataPaginationEnd = pageNum * numOfBooksDisplayed;
    let dataPaginationStart = dataPaginationEnd - numOfBooksDisplayed;
    let searchQueryUrl = `${this.baseUrl}subject=${subject}&limit=${dataPaginationEnd}&offset=${dataPaginationStart}`;


    return this.http.get(searchQueryUrl).pipe(
      retry(3),
      map(res => {
        let books: BookDataModel[] = res['docs'];
        books = books.map(this.optimizeBookData);

        return books;
      })
    );
  }

}
