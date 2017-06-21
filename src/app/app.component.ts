import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBatchChange;
  openChangeData(event) {
    this.isBatchChange = event;
  }
}
