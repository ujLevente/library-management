import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubjectDataModel} from "../model/subject-data-model";

@Injectable({
  providedIn: 'root'
})
export class WelcomePageServiceService {


  constructor(private http: HttpClient) { }

}
