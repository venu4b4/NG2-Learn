import { Component, OnInit ,Input } from '@angular/core';

import { batchChangeService } from '../../service/batch-cahage.service'

@Component({
  selector: 'tn-batch-change-table',
  templateUrl: './batch-change-table.component.html',
  styleUrls: ['./batch-change-table.component.scss']
})
export class BatchChangeTableComponent implements OnInit {
  @Input() batchData;
  constructor(private _batchChange: batchChangeService) { }

  changeRequest(){
    this._batchChange.change();
  }
  ngOnInit() {
    this.changeRequest();

  }

}
