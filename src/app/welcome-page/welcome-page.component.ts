import { Component, OnInit } from '@angular/core';
import {BookSubjectApiService} from "./service/book-subject-api.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  providers: [BookSubjectApiService]
})
export class WelcomePageComponent implements OnInit {

  private subjects: string[];

  constructor(private service: BookSubjectApiService, private http: HttpClient) {
    this.subjects = ['Classic', 'Romance', 'Kids', 'Thrillers', 'Textbooks', 'Sci-fi'];
  }

  ngOnInit() {
  }

}
