import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { batchChangeService } from '../../service/batch-cahage.service'
import {Http} from '@angular/http';

@Component({
  selector: 'tn-request-batch-change',
  templateUrl: 'Request-batch-change.component.html',
  styleUrls: ['Request-batch-change.component.scss']
})
export class RequestBatchChangeComponent implements OnInit {
  public requestChagneData: Object = {
    employees: []
  };
  @Output() isBatchChange = new EventEmitter();

  constructor(private _batchChange: batchChangeService,private  http : Http) { }

  ngOnInit() {
    this._batchChange.isDept;
    this._batchChange.isLoc;
    this._batchChange.isLeavePlane;
    this.getData();
  }
  goToHome(){
    this.isBatchChange.emit(false);
  };
  /*to load data*/
  getData() {
    this.http.get('json/requestBatchChangeDeptAndLoaction.json')
      .subscribe(
        data => {
          this.requestChagneData = data.json().data;
        }
      );
  };
  /*To do: select all check boxes*/
  checkAll(changeReqcheckAll,totalCheckboxes){
    if(changeReqcheckAll){
      console.log(totalCheckboxes);
    }
    else {
      console.log('is unchecked');
    }
  };
}
