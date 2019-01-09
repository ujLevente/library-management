import { Component, OnInit } from '@angular/core';
import {WelcomePageServiceService} from "./service/welcome-page-service.service";
import construct = Reflect.construct;
import {SubjectDataModel} from "./model/subject-data-model";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  providers: [WelcomePageServiceService]
})
export class WelcomePageComponent implements OnInit {

  private subjects: string[];
  private pageData: SubjectDataModel[];

  constructor(private service: WelcomePageServiceService) {
    this.subjects = ['Classic', 'Romance', 'Kids', 'Thrillers', 'Textbooks', 'Sci-fi'];
  }

  ngOnInit() {
    let asd = new SubjectDataModel()
  }


}
