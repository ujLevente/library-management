import {BookDataModel} from "./book-data-model";

export interface SubjectDataModel {
  num_found;
  docs: BookDataModel[];
}
