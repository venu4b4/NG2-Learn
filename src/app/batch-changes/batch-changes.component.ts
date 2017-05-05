import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'tn-batch-changes',
  templateUrl: './batch-changes.component.html',
  styleUrls: ['./batch-changes.component.scss']
})
export class BatchChangesComponent implements OnInit {
  data;
  countcompleted : number;
  totalLength : number;
  staticModal;
  constructor(private  http : Http) { }
  ngOnInit() {
    this.http.get('json/batchChanage.json').subscribe(res => {
      let IsThis = this;
      /*To get count of completed */
      this.countcompleted = res.json().data.filter(function(countData){
        return countData.status == "Completed";
      }).length;

      let resultData = res.json().data.map(function(requesrData){
        requesrData.change =  requesrData.changeType.replace(/,/g, ",<br/>");
        return requesrData;
      });

      this.data = resultData;
      this.totalLength = resultData.length;

    });
    console.log(this.staticModal);
  }

}
