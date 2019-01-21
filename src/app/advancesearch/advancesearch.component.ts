import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {

//   private keyWords = {
//     filed1: string
//   };
//
//   title: string;
//   author: string;
//   isbn: string;
//   subject: string;
//   place: string;
//   person: string;
//   publisher: string;
//   keyWords: object KeyWords ;
// )



  constructor() { }

  ngOnInit() {
  }

  advanceSearchHandle(): void {

  }

  // getKeyWords(): KeyWords {
  //   keyWords: new KeyWords (
  //     this.title, this.author, this.isbn, this.subject, this.place, this.person, this.publisher)
  // }

}

export class KeyWords {
  // title: string;
  // author: string;
  // isbn: string;
  // subject: string;
  // place: string;
  // person: string;
  // publisher: string;
  //
  // constructor(
  //   title: string;
  // author: string;
  // isbn: string;
  // subject: string;
  // place: string;
  // person: string;
  // publisher: string;
  // ) {}
}

