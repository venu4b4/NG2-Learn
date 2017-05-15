import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'tn-batch-change-table',
  templateUrl: './batch-change-table.component.html',
  styleUrls: ['./batch-change-table.component.scss']
})
export class BatchChangeTableComponent implements OnInit {
  @Input() batchData;
  constructor() { }

  ngOnInit() {
  }

}
