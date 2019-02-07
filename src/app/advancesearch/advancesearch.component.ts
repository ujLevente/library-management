import { Component, OnInit } from '@angular/core';
import {ServerService} from "../shared/service/server.service";
import {SearchInputFormModel} from "./model/search-input-form-model";

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {

  private formData: SearchInputFormModel = {};

  constructor(private sharedService: ServerService) { }

  ngOnInit() {
  }

  onSubscribe() {
    this.sharedService.redirectToSearchResults(this.formData);
  }
}

