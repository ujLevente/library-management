import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
}


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

  getConfig_1() {
    return this.http.get(this.configUrl);
  }

  getConfig_2() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  getConfig_3() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, {observe: 'response'});
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

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
}
