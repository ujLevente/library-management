import {Component, Input, OnInit} from '@angular/core';
import {BookDataModel} from "../model/book-data-model";
import {BookSubjectApiService} from "../service/book-subject-api.service";

@Component({
  selector: 'app-book-slider',
  templateUrl: './book-slider.component.html',
  styleUrls: ['./book-slider.component.css']
})
export class BookSliderComponent implements OnInit {

  private pageNumber: number;
  @Input() private subject: string;
  private books: BookDataModel[];


  constructor(private service: BookSubjectApiService) { }

  ngOnInit() {
    this.pageNumber = 1;
    this.initBooks();
  }


  initBooks() {
    this.service.getBooksBySubjectAndPageNumber(this.subject, this.pageNumber).subscribe(
      res => this.books = res,
      error1 => alert("something went wrong")
    );
  }

}
