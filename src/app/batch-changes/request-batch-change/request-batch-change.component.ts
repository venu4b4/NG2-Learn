import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { batchChangeService } from '../../service/batch-cahage.service'

@Component({
  selector: 'tn-request-batch-change',
  templateUrl: 'Request-batch-change.component.html',
  styleUrls: ['Request-batch-change.component.scss']
})
export class RequestBatchChangeComponent implements OnInit {
  @Output() isBatchChange = new EventEmitter();
  constructor(private _batchChange: batchChangeService) { }

  ngOnInit() {
    this._batchChange.isDept;
    this._batchChange.isLoc;
    this._batchChange.isLeavePlane;
    console.log(this._batchChange.isDept);
  }
  goToHome(){
    this.isBatchChange.emit(false);

  }
}
