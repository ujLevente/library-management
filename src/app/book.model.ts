export class Book {
  olId: string;
  title: string;
  author: string;
  coverLink: string;
  pages: number;
  publisher: string;
  publishDate: string;
  language: string;

  constructor(olId: string, title: string, author: string, coverLink: string, pages: number, publisher: string, publishDate: string, language: string) {
    this.olId = olId;
    this.title = title;
    this.author = author;
    this.coverLink = coverLink;
    this.pages = pages;
    this.publisher = publisher;
    this.publishDate = publishDate;
    this.language = language;
  }
}
