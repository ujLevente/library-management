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
  private forward: number = 1;
  private backward: number = -1;

  constructor(private service: BookSubjectApiService) { }

  ngOnInit() {
    this.pageNumber = 0;
    this.initBooks();
  }


  initBooks() {
    this.setBooks();
  }

  scroll(direction) {
    this.pageNumber += direction;
    this.setBooks();
  }

  setBooks() {
    this.service.getBooksBySubjectAndPageNumber(this.subject, this.pageNumber).subscribe(
      res => this.books = res
    );
  }

  formatText(str: string) {
    let reducedCharacterLength = 17;
    return str.length > reducedCharacterLength ? str.slice(0, reducedCharacterLength) + "..." : str;
  }
}
