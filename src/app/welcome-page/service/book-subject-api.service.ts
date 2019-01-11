import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubjectDataModel} from "../model/subject-data-model";
import {BookDataModel} from "../model/book-data-model";

@Injectable({
  providedIn: 'root'
})
export class BookSubjectApiService {

  private baseUrl: string = 'http://openlibrary.org/search.json?';

  constructor(private http: HttpClient) { }

  private optimizeBookData(data: BookDataModel): BookDataModel {

    let book = new BookDataModel();

    book.title = data.title;
    book.author_name = data.author_name;
    book.cover_i = data.cover_i == null ?
      "/assets/img/cover-missing.jpg" :
      `http://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`;

    return book;
  }

  getBooksBySubjectAndPageNumber(subject: string, pageNum: number): BookDataModel[] {
    if (pageNum < 1 || pageNum % 1 != 0)
      return;

    // construct url
    const numOfBooksDisplayed = 5;
    let dataPaginationEnd = pageNum * numOfBooksDisplayed;
    let dataPaginationStart = dataPaginationEnd - numOfBooksDisplayed;
    let searchQueryUrl = `${this.baseUrl}subject=${subject}&limit=${dataPaginationEnd}&offset=${dataPaginationStart}`;


    let books: BookDataModel[] = [];

    this.http.get<SubjectDataModel>(searchQueryUrl).subscribe(
      (res: SubjectDataModel) => res.docs.forEach(
        doc => books.push(this.optimizeBookData(doc))
      ),
    );

    return books;
  }

}
