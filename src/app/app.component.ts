import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBatchChange;
  isviewBatchChange;
  func(event) {
    this.isBatchChange = event;
    this.isviewBatchChange = event;
  }
}
