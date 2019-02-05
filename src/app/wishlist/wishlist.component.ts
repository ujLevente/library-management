import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {Book} from '../book.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  books: any;
  bookList: Array<Book> = Array<Book>();

  constructor(public serverService: ServerService) {
  }

  ngOnInit() {
    this.onGetWishlist();
  }

  onGetWishlist() {
    console.log('onGetWishlist');
    this.serverService.getWishlist().subscribe(results => {
      this.books = results;
      this.getBooksDetails(results);
    });
  }

  getBooksDetails(bookslist) {
    for (const book in bookslist) {
      if (book != null) {
        console.log(book);
        this.serverService.getBookDetails(this.books[book]).subscribe(results => {
          for (const bookResult in results) {
            if (bookResult != null) {
              console.log('asd: ' + results[bookResult]['title']);
              let languages = '';
              if (results[bookResult].details['languages'] !== undefined) {
                languages = results[bookResult].details['languages'];
              }

              // for (const asd in results[bookResult].details) {
              //   if (asd != null) {
              //     console.log(asd);
              //   }
              // }
              const newBook = new Book(
                bookResult,
                results[bookResult].details['title'],
                results[bookResult].details['authors']['0']['name'],
                results[bookResult].details['covers']['0'],
                results[bookResult].details['number_of_pages'],
                results[bookResult].details['publishers'],
                results[bookResult].details['publish_date'],
                languages['0']);
              this.bookList.push(newBook);
              console.log('asd: ' + results[bookResult]);
            }
          }
          console.log(this.bookList);
          console.log('asd: ' + results['series']);
        });
      }
    }
  }
}
