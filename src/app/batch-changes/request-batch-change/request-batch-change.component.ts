import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { batchChangeService } from '../../service/batch-cahage.service';
import {Http} from '@angular/http';

@Component({
  selector: 'tn-request-batch-change',
  templateUrl: 'Request-batch-change.component.html',
  styleUrls: ['Request-batch-change.component.scss']
})
export class RequestBatchChangeComponent implements OnInit {
  public requestChagneData: any = {
    employees: []
  };
  public dt: Date = new Date();
  private opened: boolean = false;
  get getDate(): string {
    return this.dt.toLocaleDateString();
  }
  public open(): void {
    this.opened = !this.opened;
  }
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
  checkAll(changeReqCheckAll){
     this.requestChagneData.employees.map(x => x.state = changeReqCheckAll)
  };
  isAllChecked(changeReqCheckAll) {
     return this.requestChagneData.employees.every(_ => _.state);
  }

/*  checksingle(allCheck,index,isdata){
    let count = this.requestChagneData.employees.length;
    if(isdata) {
      this.checkSelectbox = true;
    }
    else{
      this.checkSelectbox = false;
    }
    let checkCount = this.requestChagneData.employees.filter(function(item){
     return item.Selected == true;
    }).length;
  }*/
}
