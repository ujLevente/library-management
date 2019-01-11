import { Component, OnInit } from '@angular/core';
import {BookSubjectApiService} from './service/book-subject-api.service';
import {SubjectDataModel} from './model/subject-data-model';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  providers: [BookSubjectApiService]
})
export class WelcomePageComponent implements OnInit {

  private subjects: string[];
  private pageData: SubjectDataModel[];

  constructor(private service: BookSubjectApiService) {
    this.subjects = ['Classic', 'Romance', 'Kids', 'Thrillers', 'Textbooks', 'Sci-fi'];
  }

  ngOnInit() {
    const asd = new SubjectDataModel();
  }


}
