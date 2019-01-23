import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {BookDataModel} from "./model/book-data-model";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Security-Policy': 'script-src \'self\' https://openlibrary.org'
  })
};

@Injectable()
export class ServerService {
  configUrl = 'assets/config.json';
  openLibUrl = 'https://openlibrary.org/api/books?jscmd=details&format=json&bibkeys=';
  openLibTitleSearchUrl = 'http://openlibrary.org/search.json?title=';

  // OL9724026M

  constructor(private http: HttpClient) {
  }

  getBookDetails(olId) {
    console.log('getting book details');
    return this.http.get(this.openLibUrl + olId)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  quickSearch(searchString) {
    console.log('getting book details');
    return this.http.get(this.openLibTitleSearchUrl + searchString.replace(' ', '+'))
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getBooksByQuery(searchQueryUrl: string): Observable<BookDataModel[]> {

    return this.http.get(searchQueryUrl)
      .pipe(
        retry(3),
        map(res  => {
          let books: BookDataModel[] = res['docs'];
          books = books.map(this.optimizeBookData);

          return books;
        }),
        catchError(this.handleError)
      )
  }

  private optimizeBookData(data: BookDataModel): BookDataModel {

    let book: BookDataModel = {
      cover_edition_key: data.cover_edition_key,
      title: data.title,
      author_name: data.author_name,

      cover_i: data.cover_i == null ?
        "/assets/img/cover-missing.jpg" :
        `http://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`
    };

    return book;
  }

}
