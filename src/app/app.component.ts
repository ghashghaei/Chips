import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages: Array<string> = ['JavaScript', 'Java', 'Go', 'Python', 'Ruby', 'Objective C'];
  selectedLanguages: Array<string> = ['JavaScript'];
}
