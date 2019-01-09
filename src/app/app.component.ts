import { Component } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'libary-management-ng-app';
  private http: HttpClient;
  // constructor (private serverService: ServerService) {}

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => console.log(data),
          error => console.log(error)
        )
      );
  }
}
