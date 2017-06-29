import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'tn-view-batch-change-details',
  templateUrl: './view-batch-change-details.component.html',
  styleUrls: ['./view-batch-change-details.component.scss']
})
export class ViewBatchChangeDetailsComponent implements OnInit {
  @Output() isviewBatchChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  goToHome(){
    this.isviewBatchChange.emit(false);
  };

}
