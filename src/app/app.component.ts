import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  userInput = '';

  onInput(value: string) {
    console.log(value);
    this.userInput = value;
  }

  compare(genChar: string, userChar: string) {
    if (!userChar) {
      return 'pending';
    } else {
      if (genChar === userChar) {
        return 'correct';
      } else {
        return 'incorrect';
      }
    }
  }
}
