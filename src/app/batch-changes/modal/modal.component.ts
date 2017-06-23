import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { batchChangeService } from '../../service/batch-cahage.service'

@Component({
  selector: 'tn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() staticModal;
  department;
  location;
  @Output() isBatchChange = new EventEmitter();
  constructor(private _batchChange: batchChangeService) { }

  ngOnInit() {
    this._batchChange.isDept = false;
    this._batchChange.isLoc = false;
    this._batchChange.isLeavePlane = false;
  }
  batchChange(staticModal){
    let dept, loc;
    this.isBatchChange.emit({bool: true});
    if(this.department == true && (this.location == false || this.location == undefined)){
      this.staticModal.hide();
      this._batchChange.isDept = true;
      this._batchChange.isLoc = false;
    }
    else if(this.location == true && (this.department == false || this.department == undefined)){
      this.staticModal.hide();
      this._batchChange.isDept = false;
      this._batchChange.isLoc = true;
    }
    else if(this.department == true && this.location == true){
      this.staticModal.hide();
      this._batchChange.isDept = true;
      this._batchChange.isLoc = true;
    }

  }
}
