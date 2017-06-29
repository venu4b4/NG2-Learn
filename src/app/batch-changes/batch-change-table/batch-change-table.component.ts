import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

import { batchChangeService } from '../../service/batch-cahage.service'

@Component({
  selector: 'tn-batch-change-table',
  templateUrl: './batch-change-table.component.html',
  styleUrls: ['./batch-change-table.component.scss']
})
export class BatchChangeTableComponent implements OnInit {
  @Input() batchData;
  data;
  @Output() isChange = new EventEmitter();
  constructor(private _batchChange: batchChangeService) { }

  ngOnInit() {
   /* this.changeRequest();*/

  }
  viewChangeDetails(data){
    this.isChange.emit({bool: true});
    /*this.isviewBatchChangeData.emit(data);*/
  }
}
