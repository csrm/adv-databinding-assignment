import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [];
  onStartClicked(counter: number) {
    console.log(counter);
    this.list.push(counter);
  }
}
