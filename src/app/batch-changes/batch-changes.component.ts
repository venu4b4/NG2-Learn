import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'tn-batch-changes',
  templateUrl: './batch-changes.component.html',
  styleUrls: ['./batch-changes.component.scss']
})
export class BatchChangesComponent implements OnInit {
  data;
  @Output() isBatchChange = new EventEmitter();
  countCompleted : number;
  totalLength : number;
  constructor(private  http : Http) { }
  ngOnInit() {
    /*this.isBatchChange;*/
    this.http.get('json/batchChanage.json').subscribe(res => {
      let IsThis = this;
      /*To get count of completed */
      this.countCompleted = res.json().data.filter(function(countData){
        return countData.status == "Completed";
      }).length;

      let resultData = res.json().data.map(function(requestData){
        requestData.change =  requestData.changeType.replace(/,/g, ",<br/>");
        return requestData;
      });

      this.data = resultData;
      this.totalLength = resultData.length;

    });
  }
  openChangeData(event) {
    this.isBatchChange.emit(event.bool);
  }
}
