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
    // Adding CORS header
    const corsheader = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };

    console.log('getting book details');
    return this.http.get(this.openLibUrl + olId, corsheader)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  quickSearch(searchString) {
    // Adding CORS header
    const corsheader = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };

    console.log('getting book details');
    return this.http.get(this.openLibTitleSearchUrl + searchString.replace(' ', '+'), corsheader)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  isBookOnWishlist(olId) {
    console.log('getting book is on wishlist');

    // Adding CORS header
    const corsheader = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };

    const postData = new FormData();
    postData.append('OLID', olId);
    return this.http.post('http://totallylegit.xyz:8080/wishlist/onwishlist', postData, corsheader);
  }

  addToWishList(olId) {
    console.log('getting book is on wishlist');

    // Adding CORS header
    const corsheader = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };

    const postData = new FormData();
    postData.append('OLID', olId);
    return this.http.post('http://totallylegit.xyz:8080/wishlist/add', postData, corsheader);
  }

  removeFromWishList(olId) {
    console.log('getting book is on wishlist');

    // Adding CORS header
    const corsheader = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };

    const postData = new FormData();
    postData.append('OLID', olId);
    return this.http.post('http://totallylegit.xyz:8080/wishlist/remove', postData, corsheader);
  }

  getWishlist() {
    console.log('getting book is on wishlist');

    // Adding CORS header
    const corsheader = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    const postData = new FormData();
    postData.append('get', 'wishlist');
    return this.http.post('http://totallylegit.xyz:8080/wishlist/getwishlist', postData, corsheader);
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
